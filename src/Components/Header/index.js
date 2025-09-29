import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <h3 className="brand-name">neogreens</h3>
      <nav className="nav-items">
        <ul className="nav-links">
          <li>
            <a href="#home">About Us</a>
          </li>
          <li>
            <a href="#about">Contact Us</a>
          </li>
        </ul>
          <button className="login-button">Buy Now</button>
      </nav>
    
    </header>
  );
};

export default Header;
