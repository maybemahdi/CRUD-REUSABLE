import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("user added successfuly");
          form.reset();
        }
      });
  };

  return (
    <>
      <h1>Simple CRUD Operation</h1>
      <Link to={'/'}>Home</Link>
      <br />
      <Link to={'/users'}>Users</Link>
      <form className="form" onSubmit={handleAddUser}>
        <input placeholder="Your Name" type="text" name="name" />
        <input placeholder="Your Email" type="email" name="email" />
        <input placeholder="Your Password" type="password" name="password" />
        <button type="submit">Add User</button>
      </form>
      {/* <div>
        {users.map(user => <p key={user.id}>{user.name} : {user.email}</p>)}
      </div> */}
    </>
  );
}

export default App;
