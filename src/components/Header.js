import React from "react";
import Typed from "react-typed";
import cv from "../Matan Yamin.pdf";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <br/><br/><br/>
                <h1>Welcome to my website!</h1>
                <Typed 
                className="typed-text"
                strings={["Unity Developer", "C# and OOP Expert", "Software Engineer", ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <div className="py-4">
                {/* <a href={cv} className="btn-main-offer" download="Matan Yamin - CV">Resume</a> */}
                <Link offset={-110} to="contacts" href="#"><a className="btn-main-offer2">Contact Me</a></Link>
                </div>
                {/* <a href={cv} download>Click to download</a> */}
            </div>
        </div>
    )
}

export default Header;
