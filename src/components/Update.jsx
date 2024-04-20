import { Link, useLoaderData } from "react-router-dom";
import "../App.css";

const Update = () => {
  const profile = useLoaderData();
  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const updatedUser = { name, email, password };
    fetch(`http://localhost:5000/user/${profile._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            alert("User updated successfully")
        }
    })
  };
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/users"}>Users</Link>
      <h3>Update Profile for {profile.name}</h3>
      <form className="form-update" onSubmit={handleUpdateUser}>
        <input
          defaultValue={profile.name}
          placeholder="Your Name"
          type="text"
          name="name"
        />
        <input
          defaultValue={profile.email}
          placeholder="Your Email"
          type="email"
          name="email"
        />
        <input
          defaultValue={profile.password}
          placeholder="Your Password"
          type="password"
          name="password"
        />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default Update;
