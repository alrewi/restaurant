const express = require("express");
const path = require("path");

const app = express();
var PORT = process.env.PORT || 3000;

var reservations =[]
var waitlists = []

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route name

//Display pages
app.get("/reservation-view", function(req, res){
    res.sendFile(path.join(__dirname, "html/tables.html"))
});


app.get("/reservation-form", function(req, res){
    res.sendFile(path.join(__dirname, "html/reservations.html"))
});

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "html/home.html"))
});

//Getting reservation list
app.get("/api/reservation", function(req, res){
    return res.json(reservations)
});

app.get("/api/waitlist", function(req, res){
    return res.json(waitlists)
});



app.post("/api/reservation", function(req, res){
    console.log(res.body)
    var request = res.body;
    if(reservations.length > 5){
        waitlists.push(request)
    }else{
        reservations.push(request)
    }


});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  