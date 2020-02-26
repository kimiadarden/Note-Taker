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

        writeFileAsync("./db/noteContents.json", JSON.stringify(noteContents)).then(function() {
        });

        res.json(addingNotes);


    }); 


//deleting a note:
    app.delete("/api/notes/:id", function(req, res) {
        let selectedNote = parseInt(req.params.id);
      
        for (let i = 0; i < noteContents.length; i++) {
            if (selectedNote === noteContents[i].id) {
                noteContents.splice(i,1);
                
                let noteJSON = JSON.stringify(noteContents, null, 2);

                writeFileAsync("./db/noteContents.json", noteJSON).then(function() {
                });   
        
            }        
        }

        res.json(noteContents);


    });


}