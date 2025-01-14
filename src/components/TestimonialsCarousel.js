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
          <h3>AC Remote for LG</h3>
          <p>
            The ultimate <b>AC remote control app</b> for LG air conditioners.  
            Used by <b>millions worldwide</b>, it lets you <b>adjust temperature, change modes, and optimize settings</b> with ease.  
            Trusted for its <b>simplicity, reliability, and advanced features</b>.
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Jane Doe 2" />
        <div className="myCarousel">
          <h3>Tinger</h3>
          <p>
            A thrilling <b>maze navigation game</b> by <span className="croogla-font">myapps</span><span className="blue-dot">.</span>.  
            Test your reflexes as you <b>maneuver through tunnels, avoid obstacles</b>, and push your limits.  
            With <b>increasing difficulty</b>, Tinger keeps you hooked on <b>beating high scores</b>.
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="John Doe 3" />
        <div className="myCarousel">
          <h3>Remote for ChromeCast</h3>
          <p>
            A feature-packed <b>remote control app for Chromecast</b> on <b>iOS & Android</b>.  
            Enjoy a <b>smooth, intuitive experience</b> while <b>controlling streaming, adjusting volume, and managing settings</b>.  
            Loved by <b>thousands of users</b>, it's a <b>must-have for Chromecast owners</b>.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
