import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutme/AboutMe";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <Home />
            <AboutMe />
            <Education />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;
