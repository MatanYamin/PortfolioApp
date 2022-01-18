import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import cv from "../Matan Yamin.pdf";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
  <a className="navbar-brand" href="#">
    {/* <img className="logo" src={logo} alt="logo..." /> */}
    <h4 id="matan"><FontAwesomeIcon icon={faCodeBranch} style={{color: "#fff"}}/> Matan Yamin</h4>
    </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link offset={-110} to="home" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
      </li>
      {/* <li className="nav-item">
        <Link offset={-110} to="about" className="nav-link" href="#">About</Link>
      </li> */}
      <li className="nav-item">
        <Link offset={-110} to="skills" className="nav-link" href="#">Skills</Link>
      </li>
      <li className="nav-item">
        <Link offset={-110} to="portfolio" className="nav-link" href="#">Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link offset={-110} to="experience" className="nav-link" href="#">Experience</Link>
      </li>
      <li className="nav-item">
        <Link offset={-110} to="contacts" className="nav-link" href="#">Contact</Link>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href={cv} download="Matan Yamin - CV">Resume</a>
      </li> */}
    </ul>
  </div>
  </div>
</nav>
    )
}

export default Navbar;