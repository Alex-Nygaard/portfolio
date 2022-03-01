import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import SkillsAndProjects from "./components/SkillsAndProjects";
import Education from "./components/Education";
import Contact from "./components/Contact";

import "./styles.css";

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <Home />
            <AboutMe />
            <Education />
            <SkillsAndProjects />
            <Contact />
        </div>
    );
};

export default App;
