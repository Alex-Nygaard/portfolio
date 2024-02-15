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
                    <h1 className="title-dot">About me</h1>

                    <p>
                        I'm a student developer currently in my second year of
                        studying Computer Science and Engineering at TU Delft.
                        My interests include backend development, machine
                        learning and cloud computing. Outside school I always
                        strive to learn new and interesting skills, and right
                        now I'm exploring data analysis in Python with
                        <a href="https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/">
                            this amazing course.
                        </a>
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
