import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faReact, faAws, faUnity } from "@fortawesome/free-brands-svg-icons";
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
              <p>Solid background and advanced knowledge in computer development software including ReactJS, HTML5, CSS.
                <br/>
                (This site is a great example.)
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3>FullStack</h3>
              <p>Specialized in Full Stack Programming using ReactJS, Python, Flask, REST API, C/C++, PHP, MySQL with great affinity.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faUnity} size="2x" /></div>

              <h3>Game Development</h3>
              <p>Developing and creating variety of games using C#, Unity platform and more.
                <br/>
                Keep track for my new games to come out!
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDatabase} size="2x" /></div>

              <h3>MySQL & Flask</h3>
              <p>
              Skilled in working with large database management, version control tools and web technologies such as MySQL, GitHub, Flask.
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Skills;
