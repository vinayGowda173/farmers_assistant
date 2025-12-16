import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../components/FarmerLogin.css";
import loginside from "../images/loginpageside12.avif";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3051/login`,
        {
          email,
          password,
        }
      );
      // Store the JWT token in local storage or cookie
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      console.error("There was an error logging in!", error);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login">
      <div className="leftlog">
        <img src={loginside} alt="logimg"></img>
      </div>
      <div className="rightlog">
        <form onSubmit={handleSubmit} className="formlog">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="para">
            Don't have an account? <Link to="/farmersignup">Click here</Link> to
            signup
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
