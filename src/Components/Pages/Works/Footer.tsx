import React from "react";
import { Link } from "react-router-dom";
import UrlLogo from "../../../Assets/Images/logo-icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <img src={UrlLogo} alt="conceptcube logo" />
      </Link>
      <a href="https://vimeo.com" target=" _blank">
        <p>VIMEO</p>
      </a>
      <a href="https://www.instagram.com" target=" _blank">
        <p>YOUTUBE</p>
      </a>
      <a href="https://www.instagram.com" target=" _blank">
        <p>INSTAGRAM</p>
      </a>
      <a
        href="https://www.facebook.com"
        target=" _blank"
      >
        <p>FACEBOOK</p>
      </a>
    </div>
  );
};

export default Footer;
