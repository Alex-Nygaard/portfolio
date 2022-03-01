import React from "react";
import portrait from "./img/portrait.png";

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="about-me-text">
                <div className="about-me-title">
                    About <span className="about-me-me">me</span>.
                </div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Non, quidem labore laborum ipsum perspiciatis voluptatibus
                    harum nobis amet natus molestiae sit ipsa neque possimus
                    eveniet in architecto delectus tenetur, earum officia hic,
                    dolorem mollitia? Blanditiis saepe rerum veritatis aperiam
                    qui nesciunt fugit quisquam dolorum omnis assumenda,
                    repellendus at cum harum?
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, laudantium. Quia neque eum, sunt maxime expedita
                    dolorum sapiente ipsum veniam.
                </p>
            </div>
            <div className="about-me-image">
                <img className="portrait" src={portrait} alt="portrait"></img>
            </div>
        </div>
    );
};

export default AboutMe;
