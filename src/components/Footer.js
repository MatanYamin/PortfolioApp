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
              <a href="mailto:yamin2211@gmail.com">matanyamindevelop@gmail.com</a>
            </div>
            {/* <div className="d-flex">
              <p>Israel</p>
            </div> */}
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
              <Link offset={-110} to="home" href="#"><a className="footer-nav">Home</a></Link>
                <br />
                <Link offset={-110} to="about" href="#"><a className="footer-nav">About</a></Link>
                <br />
              </div>
              <div className="col">
              {/* <Link offset={-110} to="experience" href="#"><a className="footer-nav">Experience</a></Link> */}
                {/* <br /> */}
                {/* <Link offset={-110} to="portfolio" href="#"><a className="footer-nav">Portfolio</a></Link> */}
                <Link offset={-110} to="skills" href="#"><a className="footer-nav">Technologies</a></Link>
                <br />
                <Link offset={-110} to="contacts" href="#"><a className="footer-nav">Contacts</a></Link>
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
