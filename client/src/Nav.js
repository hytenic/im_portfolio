import React from "react";
import AboutMe from "./AboutMe"

const Nav = (props) => (
    <nav className="navbar">
        <div className={"contact " + "eachMenu"} onClick={props.handleAboutMe}>
            Contact
        </div>
        <div className={"aboutMe " + "eachMenu"}>
            <a href="./aboutMe">About Me</a>
        </div>
    </nav>
);

export default Nav;