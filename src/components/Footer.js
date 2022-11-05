import React from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <p className="footer--page">
        <a className="git" href="https://github.com/Sakneb">
          <FaGithub color="grey" />
        </a>

        <a className="twitter" href="https://twitter.com/saknebs">
          <FaTwitter color="grey" />
        </a>

        <a className="instagram" href="https://www.instagram.com/saknerb/">
          <FaInstagram color="grey" />
        </a>
      </p>
    </div>
  );
}

export default Footer;
