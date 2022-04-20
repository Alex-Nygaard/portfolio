import React from "react";
import TUDelftLogo from "../../img/tudelftlogo.png";
import TUDelftLibrary from "../../img/tudelft-library.jpeg";
import UWCISAKCampus from "../../img/uwcisakcampus.jpeg";
import UWCISAKlogo from "../../img/uwcisaklogo.png";
import KGcampus from "../../img/kgcampus.jpeg";
import KGlogo from "../../img/kglogo.png";

import "./education.css";

const Education = () => {
    return (
        <section id="education">
            <div className="education-title">
                <h1>Education</h1>
            </div>

            <section className="school tu-delft">
                <div className="school-text tu-delft-text">
                    <h1>Technical University of Delft</h1>
                    <h2>Delft, Netherlands</h2>
                    <br />
                    <br />

                    <p>Bachelor of Computer Science and Engineering</p>
                    <p>September 2021 - June 2024</p>
                    <br />

                    <p>Completed courses:</p>
                    <ul>
                        <li>Object oriented programming</li>
                        <li>Reasoning and Logic</li>
                        <li>Computer organization</li>
                        <li>Web and Database Technology</li>
                        <li>Calculus</li>
                        <li>Algorithms and Datastructures</li>
                        <li>Linear Algebra</li>
                        <li>Information and Data management</li>
                        <li>Object Oriented Programming Project</li>
                    </ul>
                </div>
                <img
                    className="school-background"
                    src={TUDelftLibrary}
                    alt=""
                />
                <a href="https://www.tudelft.nl/en/">
                    <img className="school-logo" src={TUDelftLogo} alt="" />
                </a>
            </section>
            <section className="school uwc-isak">
                <div className="school-text uwc-isak-text">
                    <h1>
                        United World College International School of Asia,
                        Karuizawa
                    </h1>
                    <h2>Karuizawa, Japan</h2>
                    <br />
                    <br />

                    <p>International Baccalaureate Diploma</p>
                    <p>August 2019 - May 2021</p>
                    <br />

                    <p>Completed courses:</p>
                    <ul>
                        <li>Computer Science</li>
                        <li>Mathematics Analysis and Approaches</li>
                        <li>Physics</li>
                        <li>Global Politics</li>
                        <li>English Language and Literatur</li>
                        <li>Norwegian Literature</li>
                        <li>Theory of Knowledge</li>
                        <li>Extended Essay</li>
                        <li>Creativity, Activity and Service Project</li>
                    </ul>
                </div>
                <img className="school-background" src={UWCISAKCampus} alt="" />
                <a href="https://uwcisak.jp/">
                    <img className="school-logo" src={UWCISAKlogo} alt="" />
                </a>
            </section>
            <section className="school kg">
                <div className="school-text kg-text">
                    <h1>Kristelig Gymnasium</h1>
                    <h2>Oslo, Norway</h2>
                    <br />
                    <br />

                    <p>Certificate of Competence</p>
                    <p>August 2018 - June 2019</p>
                    <br />

                    <p>Completed courses:</p>
                    <ul>
                        <li>Computer Science</li>
                        <li>Mathematics Analysis and Approaches</li>
                        <li>Physics</li>
                        <li>Global Politics</li>
                        <li>English Language and Literatur</li>
                        <li>Norwegian Literature</li>
                        <li>Theory of Knowledge</li>
                        <li>Extended Essay</li>
                        <li>Creativity, Activity and Service Project</li>
                    </ul>
                </div>
                <img className="school-background" src={KGcampus} alt="" />
                <a href="https://www.kg.vgs.no/">
                    <img className="school-logo" src={KGlogo} alt="" />
                </a>
            </section>
        </section>
    );
};

export default Education;
