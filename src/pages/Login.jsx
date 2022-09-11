import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setemail] = useState("deepaky541.dy@gmail.com");
  const [password, setpassword] = useState("12345678");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((r) => {
        if (r.type === "LOGIN_SUCCESS") {
          navigate("/");
        }
      });
    }
  };
  return (
    <div className="login">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit} className="frm">
        <div>
          <label>User Email</label>
          <br />
          <input value={email} onChange={(e) => setemail(e.target.value)} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            value={password}
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
