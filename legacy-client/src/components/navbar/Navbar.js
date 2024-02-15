import React from "react";
import { useState } from "react";
import { BsHouse } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";

import "./navbar.css";

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#");

    return (
        <nav>
            <a
                href="#home"
                className={activeNav === "#" ? "active" : ""}
                onClick={() => setActiveNav("#")}
            >
                <BsHouse />
            </a>
            <a
                href="#aboutme"
                className={activeNav === "#aboutMe" ? "active" : ""}
                onClick={() => setActiveNav("#aboutMe")}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#education"
                className={activeNav === "#education" ? "active" : ""}
                onClick={() => setActiveNav("#education")}
            >
                <BsBook />
            </a>
            <a
                href="#projects"
                className={activeNav === "#projects" ? "active" : ""}
                onClick={() => setActiveNav("#projects")}
            >
                <BsCodeSlash />
            </a>
            <a
                href="#contact"
                className={activeNav === "#contact" ? "active" : ""}
                onClick={() => setActiveNav("#contact")}
            >
                <BsChatLeft />
            </a>
        </nav>
    );
};

export default Navbar;
