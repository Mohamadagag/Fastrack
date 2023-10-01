import "../styles/Navigation.css";
import {
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io";
import { FiMenu } from "react-icons/fi";

import Logo from "../assets/new-logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <header className="nav_container">
      <div className="nav_container_top">
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

      <div className="nav_container_bottom">
        <div className="nav_container_bottom_links">
          <div>
            <NavLink to="/">
              <img src={Logo} alt="Fastrack Logo" />
            </NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/luxury-cars">Rent a Car</NavLink>
              </li>
              <li>
                <NavLink to="/brands">All Brands</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>
            </ul>
          </nav>

          <div className="mobile-icon">
            <button onClick={() => setOpenMenu(!openMenu)}>
              <FiMenu className="menu-btn" />
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-icon mobile-menu">
        <div className={`${openMenu ? "open-menu" : "close-menu"}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/luxury-cars" onClick={closeMenu}>
                Rent a Car
              </NavLink>
            </li>
            <li>
              <NavLink to="/brands" onClick={closeMenu}>
                All Brands
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" onClick={closeMenu}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" onClick={closeMenu}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
