var noteContents = require("../db/db")
const util = require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);


module.exports= function(app){


    app.get("/api/notes", function(req, res) {
        res.json(noteContents);
    });

    app.post("/api/notes", function(req, res) {

        let addingNotes = req.body;

        let lastId = noteContents[noteContents.length - 1]["id"];
        let newId = lastId + 1;
        addingNotes["id"] = newId;
        
        noteContents.push(addingNotes);

    }); 

}