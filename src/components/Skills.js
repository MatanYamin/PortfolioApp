import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faReact, faAws } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode, faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div id="skills" className="services">
      <h1 className="py-5">skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faReact} size="2x" /></div>
              <h3>Web Development</h3>
              <p>Solid background and advanced knowledge in computer development software including ReactJS, HTML5, CSS.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3>FullStack</h3>
              <p>Skilled in working with Python, React, C/C++, JS, PHP as Front & BackEnd.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faAws} size="2x" /></div>

              <h3>Cloud Services</h3>
              <p>I am experienced with AWS services such as: EC2 (Linux), S3-Bucket, Cognito, Lambda.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDatabase} size="2x" /></div>

              <h3>MySQL & Flask</h3>
              <p>I have developed full server side using Flask (Python) and MySQL db.</p>
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Skills;
