var mongoose = require("mongoose");

var Post = require("./models/post");
var User = require("./models/user");

mongoose.connect('mongodb://localhost:27017/blog_demo_2', { useNewUrlParser: true });

Post.create({
    title:"How to cook the best beef. 4",
    content:"asdasdasdasd"
}, function(err, post) {
    if (err) {
        console.log(err);
    } else {
        User.findOne({email:"bob@gmail.com"}, function(err, foundUser) {
            if(err) {
                console.log(err);
            } else {
                foundUser.posts.push(post);
                foundUser.save(function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        });
    }
});

//Find USER
//fIND ALL POSTS for that user

// User.find({email:"bob@gmail.com"}).populate("posts").exec(function(err, user) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user["posts"]);
//     }
// });