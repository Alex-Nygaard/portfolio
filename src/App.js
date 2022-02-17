import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import SkillsAndProjects from "./components/SkillsAndProjects";
import Education from "./components/Education";
import Contact from "./components/Contact";

import "./styles.css";

const App = () => {
    return (
        <div>
            <Navbar />
        </div>
    );
};

export default App;
