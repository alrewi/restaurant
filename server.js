const express = require("express");
const path = require("path");

const app = express();
var PORT = process.env.PORT || 3000;

var reservations =[]
var waitlist = []

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route name

//Display pages
app.get("/reservation-view", function(req, res){
    res.sendFile(path.join(__dirname, "table.html"))
});


app.get("/reservation-form", function(req, res){
    res.sendFile(path.join(__dirname, "form.html"))
});

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/api/reservation", function(req, res){
    return res.json(reservations)
});



app.post("/reservation-form", function(req, res){
    console.log(res.body)
    var request = res.body;


});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  