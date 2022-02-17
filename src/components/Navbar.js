import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="navbar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/aboutme">About Me</Link>
            </li>
            <li>
                <Link to="/skillsandprojects">Skills and Projects</Link>
            </li>

            <li>
                <Link to="/education">Education</Link>
            </li>

            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default Navbar;
