var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

var catSchema =  new mongoose.Schema({
    name:String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the db

// var george = new Cat({
//     name: "Mrs.Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat) {
//     if (err) {
//         console.log("Something wrong");
//     } else {
//         console.log("Succedd!")
//         console.log(cat)
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if (err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});

//retrieve all cats from db

Cat.find({}, function(err, cats) {
    if (err) {
        console.log("Error:");
        console.log(err);
    } else {
        console.log("All the cats");
        console.log(cats);
    }
});