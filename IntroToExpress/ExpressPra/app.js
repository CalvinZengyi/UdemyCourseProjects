var express = require("express");
var app = express();


// "/" => "Hi there"
app.get("/", function(req, res) {
    res.send("Hi, there, welcome to my assignment!");
});


// "/bye" => "Goodbye"
app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal;
    var sound = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof"
    };
    res.send("The " + animal + " says " + "'" + sound[animal] + "'");
});

app.get("/repeat/:word/:num", function(req, res) {
    var word = req.params.word;
    var num = parseInt(req.params.num);
    var result = ""
    for (var i = 0; i < num; i++) {
        result += word + " ";
    }
    res.send(result);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});