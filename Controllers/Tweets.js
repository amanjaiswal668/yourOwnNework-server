const express = require('express')
const app = express()

const bcrypt = require('bcrypt');

var bodyParser = require('body-parser');
var cors = require('cors')
var Posts = require('../Models/Post');
var Users = require('../Models/UserSchema');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.options('*', cors());
app.use(cors());


async function createPost(req, res) {
    // const post = new Posts(req.body)
    var newPost = new Posts ({

        post: req.body.post,
        time: req.body.time,
    })
    try {
        // const body = JSON.stringify(req.body)
        const userId = req.body.userId;
        
        const user_data = await Users.findById(userId);
        console.log("USer id at createPsot :- " +newPost)

        var v = user_data.post.push(newPost);
        console.log(v)
        await user_data.save();
        await newPost.save(function (err) {
            if (!err) {
                res.send(newPost);
            } else {
                res.send(err);
            }
        });

    } catch (e) {
        res.status(500).json({
            message: "Unable to create post. Sorry for the inconvenience caused."
        });
    }
}

// SignUp new user ends.

// Login user starts.


async function updatePost(req, res) {
    try {
        const post = req.body.post;
        const time = req.body.time;

        Users.findOne({ email: email }, function (err, foundUser) {
            if (err) {
                res.send("Error login the User. Please try again.")
            } else {
                if (foundUser) {
                    if (foundUser.password === password) {
                        res.send(foundUser._id);
                    } else {
                        res.send("Invalid password.")
                    }
                } else {
                    res.send("Invalid user.")
                }
            }
        });

    } catch (err) {
        res.status(500).json({
            message: "Some Error Occurred. Please try after some time"
        })
    }
}
module.exports = {
    createPost,
    updatePost,
};