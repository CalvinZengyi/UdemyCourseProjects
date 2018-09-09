var express = require("express");
var app = express();


// "/" => "Hi there"
app.get("/", function(req, res) {
    res.send("Hi, there!");
});


// "/bye" => "Goodbye"
app.get("/bye", function(req, res) {
    res.send("Goodbye");
});
// "/dog" => "MEOW"
app.get("/dog", function(req, res) {
    res.send("MEOW");
});

app.get("/r/:subreddit", function(req, res) {
    var subreddit = req.params.subreddit;
    res.send("welcome to " + subreddit + "!");
});

app.get("*", function(req, res) {
    res.send("you are a star");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});