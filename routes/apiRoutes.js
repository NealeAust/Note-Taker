// Dependencies
const fs = require("fs");
const router = require('express').Router();
const { v4: uuidv4 } = require("uuid");

// Read db.json and return saved notes
router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", 'utf-8', (err, data) => {
        if (err) throw err;

        var dataNotes = JSON.parse(data);

        res.json(dataNotes);
    });
});

//  Post a new note, with a unique Id, save  & return to client
router.post("/notes", (req, res) => {
    const newNote = req.body;
    fs.readFile("./db/db.json", 'utf-8', (err, data) => {
        if (err) throw err;

        var dataNotes = JSON.parse(data);

        newNote.id = uuidv4();
        dataNotes.push(newNote);


        fs.writeFile("./db/db.json", JSON.stringify(dataNotes), (err) => {
            if (err) throw err;
            res.json(newNote);

        })
    })

});

// Delete a note (read notes, delete note with Id property, rewrite notes to db.json)
router.delete("/notes/:id", (req, res) => {
    const deleteId = req.params.id;
    fs.readFile("./db/db.json", 'utf-8', (err, data) => {
        if (err) throw err;
        console.log("In the readFile function");
        console.log("this is id: ", deleteId)
        var dataNotes = JSON.parse(data);
        var indexPosition = null
        for (let i = 0; i < dataNotes.length; i++) {
            if (dataNotes[i].id === deleteId) {
                console.log("Found the matching ID")
                console.log(i)
                indexPosition = i;
            }
        }
        dataNotes.splice(indexPosition, 1);
        console.log(`Note deleted! Note ID: ${deleteId}`);
        console.log("THIS IS THE DELETED NOTE: ", dataNotes)
        fs.writeFile("./db/db.json", JSON.stringify(dataNotes), (err) => {
            if (err) throw err;  
            res.json(deleteId);             
        })
        
     


    })
});
module.exports = router;


