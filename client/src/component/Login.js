import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin } from "../js/userSlice/userSlice";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>You are welcome</h1>
      <div className="LoginInput">
        <h2>EMAIL</h2>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <h2>PASSWORD</h2>
        <input
          type="text"
          placeholder="Enter your password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button onClick={() => dispatch(userLogin(user))}>LOGIN</button>
      <h4>
        you dont have a account <Link to="/register"> Register now</Link>
      </h4>
    </div>
  );
};

export default Login;
