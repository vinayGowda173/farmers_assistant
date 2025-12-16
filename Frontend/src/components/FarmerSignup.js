import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../components/FarmerSignup.css";
import loginside from "../images/loginpageside12.avif";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3051/signup`,
        {
          username,
          email,
          password,
        }
      );
      navigate("/home");
    } catch (error) {
      console.error("There was an error signing up!", error);
      alert("Error signing up. Please try again.");
    }
  };

  return (
    <div className="signup">
      <div className="leftsign">
        <img src={loginside} alt="logimg"></img>
      </div>
      <div className="rightsign">
        <form onSubmit={handleSubmit} className="formsign">
          <h2>Signup</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
