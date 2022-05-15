import React from "react";
import portrait from "../../img/portrait.png";
import "./aboutme.css";

const AboutMe = () => {
    const scrollToContact = () => {
        document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section id="aboutme">
            <section className="aboutme-container">
                <img
                    className="portrait-img"
                    src={portrait}
                    alt="Self portrait"
                />

                <div className="aboutme-text">
                    <h1>About me.</h1>

                    <p>
                        I'm a junior developer currently studying Computer
                        Science and Engineering at TU Delft. My interests
                        include
                    </p>

                    <button
                        className="btn btn-primary"
                        onClick={scrollToContact}
                    >
                        Get in touch
                    </button>
                </div>
            </section>
        </section>
    );
};

export default AboutMe;
