import React from "react";
import resizeNavbar from "./scripts/resizeNavbar";

const Navbar = () => {
    let start, final;
    let links;

    window.addEventListener("load", () => {
        const topLeft = document.querySelector(".topLeft");
        const topRight = document.querySelector(".topRight");
        const bottomLeft = document.querySelector(".bottomLeft");
        const bottomRight = document.querySelector(".bottomRight");
        links = [topLeft, topRight, bottomLeft, bottomRight];
        console.log(links);
        [start, final] = resizeNavbar(links);

        for (let i = 0; i < links.length; i++) {
            let X = start[i].x;
            let Y = start[i].y;
            links[i].style.left = X + "px";
            links[i].style.top = Y + "px";
        }
    });

    window.addEventListener("resize", () => {
        [start, final] = resizeNavbar(links);
        const percent =
            document.querySelector(".home").getBoundingClientRect().bottom /
            window.innerHeight;
        if (percent > 0) {
            for (let i = 0; i < links.length; i++) {
                let X = start[i].x;
                let Y = start[i].y;
                links[i].style.left = X + "px";
                links[i].style.top = Y + "px";
            }
        } else {
            for (let i = 0; i < links.length; i++) {
                let X = final[i].x;
                let Y = final[i].y;
                links[i].style.left = X + "px";
                links[i].style.top = Y + "px";
            }
        }
    });

    window.addEventListener("scroll", () => {
        const percent =
            document.querySelector(".home").getBoundingClientRect().bottom /
            window.innerHeight;

        if (percent > 0) {
            for (let i = 0; i < links.length; i++) {
                let X = start[i].x + (final[i].x - start[i].x) * (1 - percent);
                let Y = start[i].y + (final[i].y - start[i].y) * (1 - percent);
                links[i].style.left = X + "px";
                links[i].style.top = Y + "px";
            }
        } else {
            for (let i = 0; i < links.length; i++) {
                links[i].style.left = final[i].x + "px";
                links[i].style.top = final[i].y + "px";
            }
        }
    });

    return (
        <div className="navbar">
            <div className="nav-link topLeft">About me</div>
            <div className="nav-link topRight">Contact me</div>
            <div className="nav-link bottomLeft">Education</div>
            <div className="nav-link bottomRight">Skills and projects</div>
        </div>
    );
};

export default Navbar;
