import React from "react";
import author from "../matanyamin.jpg";
import { Link } from "react-scroll";
import '../App.css';

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div id="enlargedText" className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello there!
            <br/><br/>
            My name is Matan Yamin. <br/><br/>
             I'm a software engineer specializing in Unity development.
             <br/><br/> With advanced expertise in C# and object-oriented programming, I'm dedicated to creating clean, maintainable code with keen attention to detail
             <br/><br/>
             My experience includes developing games for mobile (iOS, Android), VR, and PC platforms.             <br/><br/>
             I pride myself on being a highly self-taught individual and a valuable team player.
              {/* <br/>
              <br/>
              Check out my latest projects in the <Link offset={-110} className="highlight-link" to="portfolio">Portfolio</Link> section. */}
              <br/><br/>
              <i>Nice to meet you!</i>
              {/* <small>Nice to meet you!</small> */}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
