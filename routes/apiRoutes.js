var noteContents = require("../db/db")
const util = require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);


module.exports= function(app){


    app.get("/api/notes", function(req, res) {
        res.json(noteContents);
    });


}