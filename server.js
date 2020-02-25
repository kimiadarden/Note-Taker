var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

//parse the JSON data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
