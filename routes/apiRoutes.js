const { clear } = require("console");
const fs = require("fs");
const router = require('express').Router();
const {v4: uuidv4} = require("uuid");


router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        console.log(data);
        var dataNotes = JSON.parse(data);
        console.log(dataNotes);
        res.json(dataNotes);
    });
});

router.post("/notes", (req, res) => {
    const newNote = req.body;
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        console.log(data);
        var dataNotes = JSON.parse(data);

        console.log(dataNotes);
        newNote.id = uuidv4();
        dataNotes.push(newNote);
        console.log(newNote);


        fs.writeFile("./db/db.json", JSON.stringify(newNote), (err) => {
            if (err) throw err;
            res.json(newNote);

        })
    })

});


// app.delete("/api/notes/:id", (req,res) => {
// const deleteId = req.params.id,


module.exports = router;