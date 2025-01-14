import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <br/><br/><br/>
                <h1>
                    Welcome to <span className="white-text">myapps</span><span className="blue-dot">.</span>
                </h1>                
                <Typed 
                className="typed-text"
                strings={[
                    "App Development",
                    "Game Development",
                    "iOS and Android Apps",
                    "Apps Used by Millions of Users",
                    "Global Reach, Local Impact",
                    "Advanced Mobile Solutions",
                    "Cutting-Edge Technology",
                    "Cross-Platform Innovation",
                    "Smart Digital Products",
                    "Next-Gen Software",
                    "Interactive Experiences",
                    "High-Performance Applications"
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <div className="py-4">
                {/* <a href={cv} className="btn-main-offer" download="Matan Yamin - CV">Resume</a> */}
                <Link offset={-110} to="contacts" href="#"><a className="btn-main-offer2">Contact Us</a></Link>
                </div>
                {/* <a href={cv} download>Click to download</a> */}
            </div>
        </div>
    )
}

export default Header;
