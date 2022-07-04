import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    experience: "",
    lvl: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container">
      <h1 className="py-4 d-flex justify-content-center">User Id: {id}</h1>
      <hr />
      <ul className="d-flex justify-content-center">
        <li className="list-group-item">username: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">password: {user.password}</li>
        <li className="list-group-item">experience: {user.experience}</li>
        <li className="list-group-item">lvl: {user.lvl}</li>
      </ul>
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
    </div>
  );
};

export default User;
