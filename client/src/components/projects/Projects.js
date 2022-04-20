import React from "react";
import "./projects.css";
import Project from "./Project";

const Projects = () => {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="project-container">
                <Project
                    title="Quizzzz app"
                    type="Object Oriented Programming Project"
                />
                <Project title="Testing1" />
                <Project title="Testing1" />
                <Project title="Testing1" />
                <Project title="Testing1" />
            </div>
        </section>
    );
};

export default Projects;
