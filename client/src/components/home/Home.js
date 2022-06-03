import React from "react";
import arrow from "../../img/arrow.png";
// import logo from "../../img/logo.png";

import "./home.css";

const Home = () => {
    const scrollToContact = () => {
        document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const downloadCV = () => {
        var link = document.createElement("a");
        link.href = "https://alexnygaard.com/api/cv";
        link.download = "ALEXANDER_NYGAARD_CV.pdf";
        link.target = "_blank";
        link.dispatchEvent(new MouseEvent("click"));
        const btn = document.querySelector(".downloadCV");
        btn.innerHTML = "Downloaded!";
        btn.style.color = "#5cb85c";
        btn.style.borderColor = "#5cb85c";
        setTimeout(() => {
            btn.innerHTML = "Download CV";
            btn.style.color = "#2e9cca";
            btn.style.borderColor = "#2e9cca";
        }, 2000);
    };

    /* async () => {
        const url = "https://alexnygaard.com/api/cv";
        const btn = document.querySelector(".downloadCV");

        btn.innerHTML = "Loading...";
        axios
            .get(url, {
                responseType: "blob",
            })
            .then((res) => {
                //Create a Blob from the PDF Stream
                const file = new Blob([res.data], {
                    type: "application/pdf",
                });
                //Build a URL from the file
                const fileURL = URL.createObjectURL(file);
                //Open the URL on new Window
                window.open(fileURL);
            })
            .catch((err) => {
                console.log(err);
                btn.innerHTML = "Failed!";
                btn.style.color = "#d9534f";
                btn.style.borderColor = "#d9534f";
                setTimeout(() => {
                    btn.innerHTML = "Download CV";
                    btn.style.color = "#2e9cca";
                    btn.style.borderColor = "#2e9cca";
                }, 2000);
                return;
            });

        btn.innerHTML = "Downloaded!";
        btn.style.color = "#5cb85c";
        btn.style.borderColor = "#5cb85c";
        setTimeout(() => {
            btn.innerHTML = "Download CV";
            btn.style.color = "#2e9cca";
            btn.style.borderColor = "#2e9cca";
        }, 2000);
    };
    */

    return (
        <section id="home">
            <div className="title-section">
                <h1 className="title title-dot">Hey, I'm Alex</h1>
                <div className="title-buttons">
                    <button className="btn downloadCV" onClick={downloadCV}>
                        Download CV
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={scrollToContact}
                    >
                        Get in touch
                    </button>
                </div>
            </div>
            <div className="scroll-more">
                <p>Scroll for more</p>
                <img src={arrow} alt=""></img>
            </div>

            {/* <div className="title-container">
                <div className="main-hello">Hey, I'm Alex.</div>
                <div className="second-hello">Hey, I'm Alex.</div>
                <div className="third-hello">Hey, I'm Alex.</div>
            </div>
            

            <div className="logo-container">
                <div className="logo-row-1">
                    <img className="logo-1-1" src={logo} alt="" />
                    <img className="logo-1-2" src={logo} alt="" />
                </div>
                <div className="logo-row-2">
                    <img className="logo-2-1" src={logo} alt="" />
                    <img className="logo-2-2" src={logo} alt="" />
                </div>
                <div className="logo-row-3">
                    <img className="logo-3-1" src={logo} alt="" />
                    <img className="logo-3-2" src={logo} alt="" />
                </div>
            </div>
            */}
        </section>
    );
};

export default Home;
