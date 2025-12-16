import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirecting
import "../components/Main.css";
import "../components/Header.css";

import title_img from "../images/title-img.avif";
import home from "../images/Home-icon.png";
import about from "../images/about-us2.png";

function Header() {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const isLoggedIn = !!localStorage.getItem("token"); // Check if user is logged in

  const handleLogout = () => {
    // Remove authentication token or any other relevant data
    localStorage.removeItem("token");
    // Redirect user to the login page
    navigate("/");
  };

  return (
    <div>
      <header>
        <main>
          <nav className="nav">
            <Link to={isLoggedIn ? "/home" : "/"} className="Home">
              <img src={title_img} alt="Farmer's Assistant"></img>
              <h1 className="title">Farmer's Assistant</h1>
            </Link>
            <div className="nav0">
              {isLoggedIn ? (
                <div className="nav1">
                  <Link to="/home">
                    <img src={home} alt="Home"></img>Home
                  </Link>
                </div>
              ) : (
                <></>
              )}
              <div className="nav2">
                <Link to="/about">
                  <img src={about} alt="About Us"></img>About us
                </Link>
              </div>
              <div className="nav3">
                {isLoggedIn ? (
                  <button onClick={handleLogout} className="logout-btn">
                    Logout
                  </button>
                ) : (
                  <> </>
                )}
              </div>
            </div>
          </nav>
        </main>
      </header>
    </div>
  );
}

export default Header;
