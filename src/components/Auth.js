import React from "react";
import "./Auth.css";
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(true);
  const navigate = useNavigate()

  const authCtx = useContext(AuthContext);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const body = {
      email,
      password,
    };

    axios
      .post(register ? "/register" : "/login", body)
      .then(({ data }) => {
        console.log("AFTER AUTH", data);
        authCtx.login(data.token, data.exp, data.userId);
        navigate('/randomizer')
      })
      .catch((err) => {
        console.log(err);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <main id="auth-main">
      <div id="auth-container">
        <h1 id="authorization title">
          Login or Sign-Up to acess the other pages!
        </h1>
        <form id="form auth-form" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
          <button className="form-btn" onClick={() => clearInputs}>
            {register ? "Sign Up" : "Login"}
          </button>
        </form>
        <button className="form-btn" onClick={() => setRegister(!register)}>
          Need to {register ? "Login" : "Sign Up"}?
        </button>
      </div>
    </main>
  );
};

export default Auth;
