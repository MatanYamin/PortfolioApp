import React from "react";
import { Link } from "react-scroll";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>My Projects</h3>
            <p>I have developed self projects (both curriculum and personal) using React, JavaScript, Python, AWS, MySQL, GitHub.
              <br/>
              See some of them <Link offset={-110} className="highlight-link" to="portfolio">here.</Link>
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
          <h3>2021-2021, PROGRAMMER</h3>
            <p>•	Revised programming and software development projects by updating code and working to improve requirements.
              <br/>
              •	Ability to solve complex problems successfully with minimal guidance or help using a logical reasoning technique and a strong
              attention to detail.
              <br/>
              •	Bug tracking using Bitbucket and cooperate with different kind of groups inside the institution.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
          <h3>2020-2021, TECHNICAL SUPPORT</h3>
              •	Handling variety of technical issues that required to have a deep research for understanding the source of the problem. 
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
          <h3>2017-2021 AZRIELI COLLEGE OF ENGINEERING, JERUSALEM</h3>
            <p>•	Graduate software engineer.
              <br/>
              •	Good leadership skills, team player, responsible and quick learner seeking an entry-level position in software development.
              <br/>
              •	Highly organized with exceptional commitment to task completion and quality assurance when working with computer software programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
