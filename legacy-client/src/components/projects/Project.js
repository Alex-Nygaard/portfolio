import React from "react";
import { AiFillGithub } from "react-icons/ai";

import ImagePlaceholder from "./projectImages/placeholder.jpeg";

const Project = (props) => {
    return (
        <div className="project-holder">
            <img
                className="project-img"
                src={props.img !== undefined ? props.img : ImagePlaceholder}
                alt=""
            />
            <h2>{props.title}</h2>
            <h4>{props.type}</h4>
            <div className="popup-text">
                <span className="tech-used-text">Tech used:</span>
                {props.tech !== undefined
                    ? props.tech.map((item) => createIcon(item))
                    : "N/A"}
            </div>

            <p className="gitlink">
                <a href={props.gitlink}>
                    <AiFillGithub />
                </a>
            </p>
        </div>
    );
};

function createIcon(Icon) {
    return <Icon />;
}

export default Project;
