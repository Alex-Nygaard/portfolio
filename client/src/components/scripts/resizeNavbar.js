export default function resizeNavbar(links) {
    const [topLeft, topRight, bottomLeft, bottomRight] = links;

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

    return [start, final];
}
