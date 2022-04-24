import React from "react";
import "./projects.css";
import Project from "./Project";

import QuizzzImage from "./projectImages/quizzz.png";
import MarketplaceImage from "./projectImages/marketplace.png";
import ISAKNOWImage from "./projectImages/isaknow.png";

const Projects = () => {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="project-container">
                <Project
                    title="Quizzzz app"
                    type="Object Oriented Programming Project"
                    img={QuizzzImage}
                />
                <Project
                    title="Marketplace platform"
                    type="Computer Science class project"
                    img={MarketplaceImage}
                />
                <Project
                    title="ISAKNOW"
                    type="Creativity, Activity and Service Project"
                    img={ISAKNOWImage}
                />
                <Project
                    title="A comparison study on detection of Deepfakes using ANNs"
                    type="Deep learning research project"
                />
                <Project title="Memory" type="Web Technology class project" />
                <Project
                    title="Book inventory"
                    type="Computer Science class project"
                />
                <Project title="Portfolio" type="This project" />
            </div>
        </section>
    );
};

export default Projects;
