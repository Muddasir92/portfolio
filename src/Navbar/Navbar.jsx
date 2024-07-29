import React, { useState } from "react";
import "./navbar.scss";
import "/src/components/folioBody/folioBody.jsx";
import darkLogo from "/src/assets/dark-logo.png";
// import lightLogo from "./assets/light-logo.png";
// import night from "../assets/night.png";
// import light from "../assets/day.png";
import Portfolio from "./../Portfolio";

function Navbar() {
  const [isMobile, setisMobile] = useState(false);
  const handleMobileTogl = () => {
    setisMobile(!isMobile);
  };
  return (
    <div>
      <div className="nav">
        <div className="logo">
          <img src={darkLogo} alt="" className="Tlogo" />
        </div>

        <div className="navlinks">
          <ul className={isMobile ? "#navbar active " : "#navbar"} id="navbar">
            <li>
              <a className="active" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a href={"#about"}>About</a>
            </li>
            <li>
              <a href={"#skills"}>Skills</a>
            </li>
            <li>
              <a href={"#projects"}>Projects</a>
            </li>
            <li>
              <a href={"#education"}>Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div id="mobile" className="" onClick={handleMobileTogl}>
          <i id="bar" className={isMobile ? "fa fa-times" : "fa fa-bars"}>
            {" "}
          </i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
