import React from "react";
import amplez from "../images/amplez.png";
import amplezPreview from "../amplezPreview.mp4";
import matanportfolio from "../images/matan-portfolio.png";
import fingers1 from "../images/fingertipssmall.png";
import fingers2 from "../images/fingertips.png";
import skycleaner from "../images/skycleaner.png"
import skycleanerdemo from "../skycleanerpreview.mp4"
import portfolioVideo from "../portfolioPreview.mp4"
import GitHubIcon from "@material-ui/icons/GitHub";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Pofrfolio = () => {

  // Amplez
  const openPopupboxAmplez = () => {
    const content = (
      <>
        <video className="portfolio-image-popupbox" src={amplezPreview} loop autoPlay type="video/mp4"/>
        <p>Landing page - Apps development company. Pure ReactJS.</p>
        <GitHubIcon /> <b> GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/MatanYamin/Amplez-Website")}>https://github.com/MatanYamin/Amplez-Website</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigAmplez = {
    titleBar: {
      enable: true,
      text: "Amplez project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  const openPopupboxSkyCleaner = () => {
    const content = (
      <>
        <video className="portfolio-image-popupbox" src={skycleanerdemo} loop autoPlay type="video/mp4"/>
        <p>Business and booking system for 'SkyCleaner'. (Curriculum development project.)
          <br/>
          Using: ReactJS for FrontEnd & Python (Flask framework, over ec2 with Nginx and Apache2) for Backend.
        </p>
        <GitHubIcon /> <b> GitHub (FrontEnd):</b> <a className="hyper-link" onClick={() => window.open("https://github.com/MatanYamin/Frontend---Final-Project", "_blank")}>https://github.com/MatanYamin/Frontend---Final-Project</a>
        <br />
        <GitHubIcon /> <b> GitHub (BackEnd):</b> <a className="hyper-link" onClick={() => window.open("https://github.com/MatanYamin/Backend---Final-Project", "_blank")}>https://github.com/MatanYamin/Backend---Final-Project</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigSkyCleaner = {
    titleBar: {
      enable: true,
      text: "SkyCleaner App project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <video className="portfolio-image-popupbox" src={portfolioVideo} loop autoPlay type="video/mp4"/>
        <p>Built With ReactJS, Bootstrap, HTML, CSS. Check out my git.</p>
        <GitHubIcon /> <b> GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/MatanYamin/PortfolioApp", "_blank")}>https://github.com/MatanYamin/PortfolioApp</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Poftfolio React and Material UI project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Task Manager React and Redux Project
  const openPopupboxHands = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={fingers2} alt="" />
        <p>As part of my final project in "Image Processing" I have developed a fingertips & palm detector using Python, CV2 and numpy libraries.</p>
        <GitHubIcon /> <b> GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/MatanYamin/Hand-Detection", "_blank")}>https://github.com/MatanYamin/Hand-Detection</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigHands = {
    titleBar: {
      enable: true,
      text: "Preview"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxAmplez}>
            <img className="portfolio-image" src={amplez} alt="Amplez Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxSkyCleaner}>
            <img className="portfolio-image" src={skycleaner} alt="SkyCleaner Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={matanportfolio} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxHands}>
            <img className="portfolio-image" src={fingers1} alt="Amplez" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigAmplez} />
      <PopupboxContainer {...popupboxConfigSkyCleaner} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigHands} />
    </div>
  )
}

export default Pofrfolio;
