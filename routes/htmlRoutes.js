// Dependencies
const path = require("path");
const router = require("express").Router();

// Request to return notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,
        "../public/notes.html"));
});

// Request to return index.html
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;