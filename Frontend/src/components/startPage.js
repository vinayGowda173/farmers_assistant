import React from "react";
import "./startPage.css";
import { Link } from "react-router-dom";
import Main from "./Main";
//import { Link } from "react-router-dom";

const StartPage = () => {
  const isLoggedIn = !!localStorage.getItem("token"); // Check if user is logged in

  return (
    <div>
      {isLoggedIn ? (
        <Main />
      ) : (
        <div className="hero">
          <div className="overlay"></div>
          <div className="container">
            <h1 className="titlestart">
              Revolutionizing Agriculture: Meet Your Farmer Assistant
              for Smarter Farming
            </h1>
            <p className="description">
              Introducing our Farmer Assistant, designed to
              revolutionize agriculture with real-time insights and actionable
              data. Optimize irrigation, monitor crop health, and manage
              livestock efficiently for increased productivity and sustainable
              practices. Empower your farming with smart decisions and maximize
              yields effortlessly.
            </p>
            <div className="logandsignbutton">
              <Link to="/farmerlogin">
                <button className="buttonlogin">Farmer Login</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartPage;
