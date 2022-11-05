import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import ResImage from "../components/card.png";

function Header() {
  return (
    <header>
      <div>
        <div className="image-container">
          <img alt="mainImage" src={ResImage} className="main-image" />
        </div>

        <h1>Sakina Ibrahimova</h1>
        <h3>Frontend Developer</h3>
        <div className="connect">
          <a
            rel="external"
            href="mailto: sakinaibrahimova7@gmail.com"
            className="email"
          >
            <FaEnvelope />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/sakina-ibrahimova-3225731a6/"
            className="linkedIn"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
