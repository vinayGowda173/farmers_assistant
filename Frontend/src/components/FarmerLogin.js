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
    // Temporary: for now, just require non-empty email/password
    // and navigate to home without contacting backend.
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Navigate to home page
    navigate("/home");
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
