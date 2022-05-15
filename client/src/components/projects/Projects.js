import React from "react";
import "./projects.css";
import Project from "./Project";

import QuizzzImage from "./projectImages/quizzz.png";
import MarketplaceImage from "./projectImages/marketplace.png";
import ISAKNOWImage from "./projectImages/isaknow.png";
import EE from "./projectImages/ee.png";
import BookInventory from "./projectImages/bookInventory.png";
import Memory from "./projectImages/memory.png";
import Martian from "./projectImages/martian.jpg";
import Portfolio from "./projectImages/portfolio.png";

import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import { DiRasberryPi } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { DiSqllite } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";

const Projects = () => {
    return (
        <section id="projects">
            <h1 className="project-title title-dot">Projects</h1>
            <div className="project-container">
                <Project
                    title="Quizzz app"
                    type="Object Oriented Programming Project"
                    img={QuizzzImage}
                    tech={[FaJava, SiSpring]}
                    gitlink="https://github.com/Alex-Nygaard/OOPP-Quizzz"
                />
                <Project
                    title="Marketplace platform"
                    type="Computer Science class project"
                    img={MarketplaceImage}
                    tech={[
                        FaPython,
                        AiFillHtml5,
                        SiJavascript,
                        DiCss3,
                        DiSqllite,
                    ]}
                    gitlink="https://github.com/Alex-Nygaard/Marketplace-platform"
                />
                {/* <Project
                    title="ISAKNOW"
                    type="Creativity, Activity and Service Project"
                    img={ISAKNOWImage}
                    tech={[
                        FaPython,
                        AiFillHtml5,
                        SiJavascript,
                        DiCss3,
                        DiRasberryPi,
                    ]}
                /> */}
                <Project
                    title="A comparison study on detection of Deepfakes using ANNs"
                    type="Deep learning research project"
                    img={EE}
                    tech={[FaPython, SiTensorflow]}
                    gitlink="https://github.com/Alex-Nygaard/EE-Project"
                />
                <Project
                    title="Memory Game"
                    type="Web Technology class project"
                    img={Memory}
                    tech={[AiFillHtml5, SiJavascript, DiCss3, FaNodeJs]}
                    gitlink="https://github.com/Alex-Nygaard/MemoryGame"
                />
                <Project
                    title="Book inventory"
                    type="Computer Science class project"
                    img={BookInventory}
                    tech={[FaPython]}
                    gitlink="https://github.com/Alex-Nygaard/Book-Inventory"
                />
                <Project
                    title="Portfolio"
                    type="This website"
                    img={Portfolio}
                    tech={[
                        FaReact,
                        AiFillHtml5,
                        SiJavascript,
                        DiCss3,
                        FaNodeJs,
                        VscAzure,
                    ]}
                    gitlink="https://github.com/Alex-Nygaard/portfolio"
                />
                <Project
                    title="Martian IOT communication"
                    type="Computer Science class project"
                    img={Martian}
                    tech={[SiCplusplus]}
                    gitlink="https://github.com/Alex-Nygaard/martianUnit2Project"
                />
            </div>
        </section>
    );
};

export default Projects;
