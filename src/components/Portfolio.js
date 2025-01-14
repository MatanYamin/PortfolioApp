import React from "react";
import tingerTrainer from "../TingerTrailer.mp4"
import tingerCover from "../images/TingerCover.png"
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
import { faVrCardboard } from "@fortawesome/free-solid-svg-icons";
// import VRIcon from "@material-ui/icons/VR";



// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import { faSteam } from "@fortawesome/free-brands-svg-icons";

const Pofrfolio = () => {

  const openPopupboxSkyCleaner = () => {
    const content = (
      <>
      <h1>TINGER</h1><h4>Advanture 2D game</h4>
        <video className="portfolio-image-popupbox" src={tingerTrainer} loop autoPlay type="video/mp4"/>
        <p>Get ready for a finger-tapping sensation with 'Tinger' – the dynamic fusion of Tunnel and Finger! 
          <br/>
          Immerse yourself in an exhilarating 2D adventure where your only guide is your trusty finger.
          <br/>
          Navigate through an endless tunnel, steadily ascending to new heights.
          <br/>
          No joysticks, no buttons – just the touch of your finger propelling you forward!
        </p>
        <GitHubIcon style={{ fontSize: 20 }}/> <small>Code is kept private. Feel free to reach out if you'd like to see a demonstration or discuss specific aspects of my work.</small>
        {/* <GitHubIcon /> <b> GitHub (FrontEnd):</b> <a className="hyper-link" onClick={() => window.open("https://github.com/MatanYamin/Frontend---Final-Project", "_blank")}>https://github.com/MatanYamin/Frontend---Final-Project</a>
        <br />
        <GitHubIcon /> <b> GitHub (BackEnd):</b> <a className="hyper-link" onClick={() => window.open("https://github.com/MatanYamin/Backend---Final-Project", "_blank")}>https://github.com/MatanYamin/Backend---Final-Project</a> */}
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

  const openPopupboxAmplez = () => {
    const content = (
      <>
  <h1>Snakes LTD</h1>

        <video className="portfolio-image-popupbox"  loop autoPlay type="video/mp4" muted/>
        <p>Casual Snakes Combat. Kill other snakes and grow as much as you can!
          <br/>
          <li>Against AI mode</li>
          <li>Classic single snake mode</li>
      </p>

        <YouTubeIcon /> <b> Official Trailer:</b> <a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=vPrHOb8yMAo&ab_channel=ZviYamin")}>LINK</a>
        <br/>
        <AppleIcon /><b> App Store:</b> <a className="hyper-link" onClick={() => window.open("https://apps.apple.com/us/app/snakes-ltd/id1667935442")}>  LINK</a>
        <br/>
        <AndroidIcon /><b> Google Store:</b> <a className="hyper-link" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.mlthings.snakesltd")}>  LINK</a>
        <br/>
        <FontAwesomeIcon className="icon" icon={faVrCardboard} size="1x" /> <b>Meta (Oculus Quest):</b> <a className="hyper-link" onClick={() => window.open("https://www.meta.com/experiences/5712013818895184/")}> LINK</a>
        <br/>
        <FontAwesomeIcon className="icon" icon={faSteam} size="1x" /> <b>Steam:</b> <a className="hyper-link" onClick={() => window.open("https://store.steampowered.com/app/2638040/Snakes_LTD/")}> LINK</a>
        <br/>
        <GitHubIcon style={{ fontSize: 20 }}/> <small>Code is kept private. Feel free to reach out if you'd like to see a demonstration or discuss specific aspects of my work.</small>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigAmplez = {
    titleBar: {
      enable: true,
      text: "Snakes LTD"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
      <h1>Spin The Globe</h1>
        <video className="portfolio-image-popupbox"  loop autoPlay type="video/mp4"/>
        <p>You know that game you played with your friends where you spin a globe and randomly stop it? 
        <br/>
        Our game brings that excitement to life! 
        <br/>
        Players spin the virtual globe and embark on spontaneous journeys to random destinations. 
        <br/>
        From exploring iconic landmarks to savoring local delicacies, every spin is a new adventure waiting to be discovered. 
        <br/>
        It's the ultimate experience for wanderers and adventurers alike!</p>
        <GitHubIcon style={{ fontSize: 20 }}/> <small>Code is kept private. Feel free to reach out if you'd like to see a demonstration or discuss specific aspects of my work.</small>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: ""
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Task Manager React and Redux Project
  // const openPopupboxHands = () => {
  //   const content = (
  //     <>
  //       <img className="portfolio-image-popupbox" src={fingers2} alt="" />
  //       <p>As part of my final project in "Image Processing" I have developed a fingertips & palm detector using Python, CV2 and numpy libraries.</p>
  //       <GitHubIcon /> <b> GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/MatanYamin/Hand-Detection", "_blank")}>https://github.com/MatanYamin/Hand-Detection</a>
  //     </>
  //   )
  //   PopupboxManager.open({ content })
  // }

  // const popupboxConfigHands = {
  //   titleBar: {
  //     enable: true,
  //     text: "Preview"
  //   },
  //   fadeIn: true,
  //   fadeInSpeed: 500
  // }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
  {/* - */}
        <div className="portfolio-image-box" onClick={openPopupboxSkyCleaner}>
            <img className="portfolio-image" src={tingerCover} alt="SkyCleaner Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxAmplez}>
            <img className="portfolio-image"  alt="Amplez Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          {/* <div className="portfolio-image-box" onClick={openPopupboxHands}>
            <img className="portfolio-image" src={fingers1} alt="Amplez" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div> */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigAmplez} />
      <PopupboxContainer {...popupboxConfigSkyCleaner} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      {/* <PopupboxContainer {...popupboxConfigHands} /> */}
    </div>
  )
}

export default Pofrfolio;
