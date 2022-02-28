import React from "react";
import TUDelftLogo from "./img/tudelftlogo.png";
import TUDelftLibrary from "./img/tudelft-library.jpeg";

const Education = () => {
    return (
        <div className="education">
            <h1>Education</h1>
            <section className="school tu-delft">
                <h2>TU delft</h2>
                <img className="tudelft-logo" src={TUDelftLogo} alt="" />
                <img className="tudelft-library" src={TUDelftLibrary} alt="" />
            </section>
            <section className="school uwc-isak">
                <h2>UWC ISAK</h2>
            </section>
            <section className="school kg">
                <h2>kristelig gymnasium</h2>
            </section>
        </div>
    );
};

export default Education;
