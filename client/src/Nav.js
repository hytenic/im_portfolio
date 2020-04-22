import React from "react";
import AboutMe from "./AboutMe"
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Nav = (props) => (
    <Router>
    <nav className="navbar">
        <div className={"home"}>
            <Link to="/" onClick={() => props.updatePageTitle("Home")}>Home</Link>
        </div>
        <div className={"contact " + "eachMenu"} onClick={props.handleAboutMe}>
            Contact
        </div>
        <div className={"aboutMe " + "eachMenu"}>
            <Link to="./aboutMe" onClick={() => props.updatePageTitle("About Me")}>About Me</Link>
        </div>
    </nav>
    </Router>
);

export default Nav;