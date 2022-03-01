import React from "react";
import arrow from "./img/arrow.png";
import logo from "./img/logo.png";

const Home = () => {
    return (
        <section className="home">
            <div className="title-container">
                <div className="main-hello">Hey, I'm Alex.</div>
                <div className="second-hello">Hey, I'm Alex.</div>
                <div className="third-hello">Hey, I'm Alex.</div>
            </div>

            <div className="scroll-more">
                <p>Scroll for more</p>
                <img src={arrow} alt=""></img>
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
        </section>
    );
};

export default Home;
