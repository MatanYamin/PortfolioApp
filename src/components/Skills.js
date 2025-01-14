import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAppStoreIos, faUnity, faAndroid, faMicrosoft } from "@fortawesome/free-brands-svg-icons";

const Skills = () => { 
  return (
    <div id="skills" className="services">
      <h1 className="py-5">Technologies</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faAppStoreIos} size="2x" /></div>
              <h3>iOS Development</h3>
                <p>
                    <span className="croogla-font">myapps</span><span className="blue-dot">.</span> specializes in creating <b>high-performance iOS applications</b> using modern frameworks and best practices. 
                    Our solutions are designed for <b>seamless user experiences, smooth performance, and Store optimization</b>.
                </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faAndroid} size="2x" /></div>

              <h3>Android Development</h3>
                <p>
                    With a focus on <b>native and cross-platform Android development</b>, 
                    <span className="croogla-font"> myapps</span><span className="blue-dot">.</span> builds <b>efficient, scalable, and feature-rich</b> applications tailored for a wide range of devices.
                </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faMicrosoft} size="2x" /></div>
              <h3>.NET Development</h3>
              <p>
                  <span className="croogla-font">myapps</span><span className="blue-dot">.</span> leverages the <b>power of .NET</b> to develop <b>robust, scalable, and high-performance applications</b>. 
                  Our expertise covers <b>backend systems, API development, and cross-platform solutions</b>.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faUnity} size="2x" /></div>

              <h3>Unity Development</h3>
                <p>
                    As a company with a strong <b>Unity development background</b>, 
                    <span className="croogla-font"> myapps</span><span className="blue-dot">.</span> creates <b>engaging, high-quality games and interactive experiences</b> across <b>mobile, VR, and PC platforms</b>.
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
