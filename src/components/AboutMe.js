import React from "react";
import author from "../assets/myapps_logo6.png";
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
            <h1 className="about-heading">about us</h1>
            <p>
                Welcome to <span className="croogla-font">myapps</span><span className="blue-dot">.</span>  
                <br/><br/>
                We specialize in developing <b>high-quality mobile applications</b> and <b>engaging games</b> for <b>iOS and Android</b>.  
                <br/><br/>
                At <span className="croogla-font">myapps</span><span className="blue-dot">.</span>, we focus on creating <b>user-friendly and innovative solutions</b> designed to enhance digital experiences.  
                <br/><br/>
                Our expertise includes <b>cross-platform app development, interactive game design, and cutting-edge mobile solutions</b>.  
                <br/><br/>
                With a passion for technology and a commitment to excellence, <span className="croogla-font">myapps</span><span className="blue-dot">.</span> is dedicated to pushing boundaries and delivering <b>smart, efficient, and future-ready software</b>.  
                <br/><br/>
                Our apps and games are enjoyed by <b>millions of users worldwide</b>, making an impact in <b>over 100 countries</b>.  
                We take pride in creating software that is <b>trusted and loved by people all around the globe</b>.  
                <br/><br/>
                <i>Join us in shaping the future of mobile innovation!</i>
            </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;