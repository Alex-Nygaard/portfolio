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
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>

                    <Route path="/aboutme" element={<AboutMe />}></Route>
                    <Route
                        path="/skillsandprojects"
                        element={<SkillsAndProjects />}
                    ></Route>
                    <Route path="/education" element={<Education />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
