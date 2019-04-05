const express = require("express");
const path = require("path");

const app = express();
var PORT = process.env.PORT || 3000;

var reservation =[]

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route name
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"))
});


app.get("/reservation-view", function(req, res){
    res.sendFile(path.join(__dirname, "view.html"))
});


app.get("/reservation-form", function(req, res){
    res.sendFile(path.join(__dirname, "form.html"))
});

app.post("/reservation-form", function(req, res){
    var reservation = res.body;


});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  