import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Project = (props) => {
    return (
        <div className="project-holder">
            <img className="project-img" src={props.img} alt="" />
            <h2>{props.title}</h2>
            <h4>{props.type}</h4>
            <p className="gitlink">
                <a href={props.gitlink}>
                    <AiFillGithub />
                </a>
            </p>
        </div>
    );
};

export default Project;
