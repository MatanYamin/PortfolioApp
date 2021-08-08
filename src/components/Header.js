import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web Development and website promotions</h1>
                <Typed 
                className="typed-text"
                strings={["Web Design", "Web Development", "FullStack programming"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">CONTACT ME</a>
            </div>
        </div>
    )
}

export default Header;
