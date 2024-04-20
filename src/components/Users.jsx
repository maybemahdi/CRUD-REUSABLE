import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDeleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount === 1) {
          alert("user deleted Successfully");
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/users"}>Users</Link>
      <h3>User List Here: {users.length}</h3>
      <h4>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email} :{" "}
            <Link to={`/user/${user._id}`}>
            <button>Update Profile</button>
            </Link>
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
          </p>
        ))}
      </h4>
    </div>
  );
};

export default Users;
