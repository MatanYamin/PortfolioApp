import React from "react";
import { Link } from "react-scroll";
import {
  LinkedinShareButton,
  LinkedinIcon,
  FacebookIcon,
  EmailIcon
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            {/* <div className="d-flex">
              <a href="tel:054-585-6350">+972 545856350</a>
            </div> */}
            <div className="d-flex">
            <h4 id="matan"><span className="croogla-font">myapps</span><span className="blue-dot">.</span> </h4>
            </div>
            {/* <div className="d-flex">
              <p>Israel</p>
            </div> */}
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6 text-center">
  <div className="row">
    <div className="col">
      <Link offset={-110} to="home" className="footer-nav">Home</Link>
      <br />
      <Link offset={-110} to="about" className="footer-nav">About</Link>
      <br />
    </div>
    <div className="col">
      <Link offset={-110} to="skills" className="footer-nav">Technologies</Link>
      <br />
      <Link offset={-110} to="contacts" className="footer-nav">Contacts</Link>
    </div>
  </div>
</div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              
            <a href="https://www.facebook.com/profile.php?id=61568068366092" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="mx-3" size={36} />
          </a>   
          <a href="mailto:matanyamindevelop@gmail.com"><EmailIcon className="mx-3" size={36} /></a>
          <a href="https://www.linkedin.com/company/myapps-tech" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="mx-3" size={36} />
          </a>   
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;myapps. | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
