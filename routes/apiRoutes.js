const fs = require("fs");
const router = require('express').Router();
const saveNotes = require('../db/storeNotes');
const uuid = require ("uuid")


router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        console.log(data)
var dataNotes = JSON.parse(data);
console.log(dataNotes)
res.json(dataNotes)
    });
    });
  
router.post("/notes", (req, res) => {
const newNote = req.body

fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    console.log(data)
var dataNotes = JSON.parse(data);
console.log(dataNotes)
res.json(dataNotes)
newNote.id = uuid;
dataNotes.push(newNote);

fs.writeFile("./db/db.json", JSON.stringify(newNote), (err) => {
if (err) throw err;
res.json(newNote);

})
})

});








// app.delete("/api/notes/:id", (req,res) => {
// const deleteId = req.params.id,





    






// const writeToFile = (destination, content) =>
//   fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
//     err ? console.error(err) : console.info(`\nData written to ${destination}`)
//   );



module.exports = router;