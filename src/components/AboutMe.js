import React from "react";
import author from "../matanyamin.jpg";
import { Link } from "react-scroll";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello there!
            <br/><br/>
             My name is Matan Yamin. <br/>
             I have recently graduated in Software Engineering and I am looking for position in software development.
             <br/><br/>
             I bring deep and solid understanding in variety of programming language such as JavaScript, Python, React, C/C++ and have handled and developed web app projects from scratch.
             <br/><br/>
             I'm Highly organized with exceptional commitment to task completion and quality assurance when working with computer software
              programs.
              <br/>
              <br/>
              Check out my latest projects in the <Link offset={-110} className="highlight-link" to="portfolio">Portfolio</Link> section.
              <br/><br/>
              <small>BTW: This website built With ReactJS, bootstrap, HTML, CSS on ec2 (AWS).</small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
