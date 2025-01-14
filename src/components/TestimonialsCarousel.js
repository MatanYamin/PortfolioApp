import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="John Doe 1" />
        <div className="myCarousel">
          <h3>Remote for LG</h3>
          <p>
            The best <b>AC remote app</b> for LG users.  
            Adjust temperature, switch modes, and optimize everything.  
            Simple, reliable, and used by <b>millions worldwide</b>.
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Jane Doe 2" />
        <div className="myCarousel">
          <h3>Tinger</h3>
          <p>
            A fast-paced <b>maze game</b> by <span className="croogla-font">myapps</span><span className="blue-dot">.</span>  
            Navigate tunnels, dodge obstacles, and beat high scores.  
            Addictive, challenging, and fun!
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="John Doe 3" />
        <div className="myCarousel">
        <h3>Remote for ChromeCast</h3>
          <p>
            A powerful <b>remote app for Chromecast</b> on <b>iOS & Android</b>.  
            Control streaming, adjust volume, and manage settings easily.  
            <b>Trusted by many users worldwide</b>.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
