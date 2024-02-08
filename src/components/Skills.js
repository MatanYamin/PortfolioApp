import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact,  faUnity } from "@fortawesome/free-brands-svg-icons";
import {  faCodeBranch, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div id="skills" className="services">
      <h1 className="py-5">skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faUnity} size="2x" /></div>
              <h3>Unity Development</h3>
              <p>Created and managed projects across platforms: Unity 2D, 3D, iOS, Android, VR, and PC. My deep understanding of Unity ensures effective solutions for diverse development needs. 
                
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faCodeBranch} size="2x" /></div>

              <h3>C# OOP</h3>
              <p>Advanced proficiency in C# and mastery of object-oriented programming, I prioritize crafting clean, maintainable code with attention to details with deep understanding of design patterns and data structures.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faGraduationCap} size="2x" /></div>

              <h3>Software Engineer</h3>
              <p>As a software engineer, I'm dedicated to crafting efficient code structures and possess exceptional problem-solving skills. These attributes contribute to my effectiveness as a developer.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faReact} size="2x" /></div>

              <h3>Web Development</h3>
              <p>Extensive expertise and advanced proficiency in web development technologies such as ReactJS, HTML5, and CSS.
                <br/><br/>
                (This site is a great example)</p>
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Skills;
