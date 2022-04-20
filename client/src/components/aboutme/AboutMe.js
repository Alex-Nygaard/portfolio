import React from "react";
import portrait from "../../img/portrait.png";
import "./aboutme.css";

const AboutMe = () => {
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam explicabo aliquam tenetur praesentium cum
                        officia optio modi veritatis illum magnam quas dolorem
                        perspiciatis nulla, consequuntur dolor necessitatibus
                        aut, obcaecati eligendi error. Dicta enim non quae
                        architecto dignissimos recusandae! Consequuntur, soluta!
                    </p>

                    <button className="btn btn-primary">Get in touch</button>
                </div>
            </section>
        </section>
    );
};

export default AboutMe;
