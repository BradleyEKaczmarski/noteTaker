const path = require("path");
const router = require("express").Router();

router.get("/notes", (req, res) => {
    // here you will render the notes HTML page
    response.sendFile(path.join(__dirname, "..notes.html"))
})

router.get("*", (req, res) => {
    // this is the default route where you will render index.html
    response.sendFile(path.join(__dirname, "../index.html"))
})

module.exports = router;

