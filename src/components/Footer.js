import React from "react";
import "../styles/Footer.css";
import {
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <h1>Help and Information</h1>

      <div className="quick-links">
        <ul>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="nav_container_top footer_nav">
        <div>
          <a href={"#"}>
            <IoLogoWhatsapp />
          </a>
        </div>
        <div>
          <a href={"#"}>
            <IoLogoFacebook />
          </a>
        </div>
        <div>
          <a href={"#"}>
            <IoLogoInstagram />
          </a>
        </div>
        <div>
          <a href={"#"}>
            <IoLogoYoutube />
          </a>
        </div>
      </div>

      <div className="madeBy">
        {year},&nbsp;
        <a target="_blank" href="https://mohamadagag.vercel.app/">
          Mohamad Agag
        </a>
      </div>
    </footer>
  );
};

export default Footer;
