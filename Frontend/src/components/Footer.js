import React from "react";
import "./Footer.css"; // Import CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="container123">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Farmer's Assistant
          </p>
          <div className="contact-details">
            <p className="contact-info">
              <span className="icon">&#9742;</span> Contact:
              farmersassistant@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
