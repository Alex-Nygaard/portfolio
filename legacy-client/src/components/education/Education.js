import React from 'react';
import TUDelftLogo from '../../img/tudelftlogo.png';
import TUDelftLibrary from '../../img/tudelft-library.jpeg';
import UWCISAKCampus from '../../img/uwcisakcampus.jpeg';
import UWCISAKlogo from '../../img/uwcisaklogo.png';
import KGcampus from '../../img/kgcampus.jpeg';
import KGlogo from '../../img/kglogo.png';
import './education.css';

const Education = () => {
    return (
        <section id="education">
            <div className="education-title">
                <h1 className="title-dot">Education</h1>
            </div>

            <section className="school tu-delft">
                <div className="school-text tu-delft-text">
                    <h1>Bachelor of Computer Science and Engineering</h1>
                    <br />
                    <h2>Technical University of Delft</h2>
                    <h2>Delft, Netherlands</h2>
                    <br />

                    <p></p>
                    <h3>September 2021 - June 2024 (Expected graduation)</h3>
                    <br />
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
                    <h1>International Baccalaureate Diploma</h1>
                    <br />
                    <h2>
                        United World College International School of Asia (UWC
                        ISAK)
                    </h2>
                    <h2>Karuizawa, Japan</h2>
                    <br />

                    <p>August 2019 - May 2021</p>
                </div>
                <img className="school-background" src={UWCISAKCampus} alt="" />
                <a href="https://uwcisak.jp/">
                    <img className="school-logo" src={UWCISAKlogo} alt="" />
                </a>
            </section>
            <section className="school kg">
                <div className="school-text kg-text">
                    <h1>Certificate of Competence</h1>
                    <br />
                    <h2>Kristelig Gymnasium (KG)</h2>
                    <h2>Oslo, Norway</h2>
                    <br />

                    <p>August 2018 - June 2019</p>
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
