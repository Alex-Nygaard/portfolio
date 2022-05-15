// server/index.js
const path = require("path");
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get("/api/cv", (req, res) => {
    // res.sendFile("AKN-cv.pdf");
    var file = fs.createReadStream("./server/AKN-cv.pdf");
    file.pipe(res);
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
