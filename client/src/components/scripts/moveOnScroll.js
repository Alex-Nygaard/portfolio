function moveOnScroll() {
    const topLeft = document.querySelector(".topLeft");
    const topRight = document.querySelector(".topRight");
    const bottomLeft = document.querySelector(".bottomLeft");
    const bottomRight = document.querySelector(".bottomRight");
    const links = [topLeft, topRight, bottomLeft, bottomRight];

    const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    const height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

    const linkPadding = 75;

    const start = [
        {
            // Top left
            x: linkPadding,
            y: linkPadding,
        },
        {
            // Top right
            x: width - linkPadding - topRight.offsetWidth,
            y: linkPadding,
        },
        {
            // Bottom left
            x: linkPadding,
            y: height - linkPadding - bottomLeft.offsetHeight,
        },
        {
            // Bottom right
            x: width - linkPadding - bottomRight.offsetWidth,
            y: height - linkPadding - bottomRight.offsetHeight,
        },
    ];

    for (let i = 0; i < links.length; i++) {
        let X = start[i].x;
        let Y = start[i].y;
        links[i].style.left = X + "px";
        links[i].style.top = Y + "px";
    }

    const finalHeight = 50;

    const final = [
        {
            // Top left
            x: width / 8 - topLeft.offsetWidth / 2,
            y: finalHeight,
        },
        {
            // Top right
            x: (7 * width) / 8 - topRight.offsetWidth / 2,
            y: finalHeight,
        },
        {
            // Bottom left
            x: (3 * width) / 8 - bottomLeft.offsetWidth / 2,
            y: finalHeight,
        },
        {
            // Bottom right
            x: (5 * width) / 8 - bottomRight.offsetWidth / 2,
            y: finalHeight,
        },
    ];

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
}

export default moveOnScroll;
