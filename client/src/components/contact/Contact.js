import React from "react";

import { AiFillLinkedin } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

import "./contact.css";

const Contact = () => {
    return (
        <section id="contact">
            <span className="contact-title title-dot">Let's talk</span>
            <div className="contact-links">
                <a href="mailto: alexander.k.nygard@gmail.com">
                    <MdAlternateEmail />
                </a>
                <a href="https://www.linkedin.com/in/alex-nygard/">
                    <AiFillLinkedin />
                </a>
                <a href="https://wa.me/4790016100">
                    <BsWhatsapp />
                </a>
            </div>
        </section>
    );
};

export default Contact;
