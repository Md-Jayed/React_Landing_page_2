import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Jayed</div>
      </div>
      <div className="n-right">
        <div className="n-lists">
          <ul>
            <Link spy={true} smooth={true} to="Navbar" activeClass="activeClass">
              <li>Home</li>
            </Link>
            <Link spy={true} smooth={true} to="Services" activeClass="activeClass">
              <li>Services</li>
            </Link>
            <Link spy={true} smooth={true} to="Experience" activeClass="activeClass">
              <li>Experience</li>
            </Link>
            <Link spy={true} smooth={true} to="Portfolio" activeClass="activeClass">
              <li>Portfolio</li>
            </Link>

            <Link spy={true} smooth={true} to="Testimonials" activeClass="activeClass">
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">contact</button>
      </div>
    </div>
  );
};

export default Navbar;
