// src/Login.js
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import "../components/AdminLogin.css";
import loginside from "../images/loginpageside12.avif";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASEURL}/adminlogin`,
        {
          username,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      window.location.href = "/home"; // Redirect to admin page
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login">
      <div className="leftlog">
        <img src={loginside} alt="logimg"></img>
      </div>
      <div className="rightlog">
        <form onSubmit={handleLogin} className="formlog">
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Login;
