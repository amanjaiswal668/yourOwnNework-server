const express = require('express')
const app = express()

const bcrypt = require('bcrypt');

var bodyParser = require('body-parser');
var cors = require('cors')
var Users = require('../Models/UserSchema');
const Posts = require('../Models/Post');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.options('*', cors());
app.use(cors());


async function viewPost(req, res) {

    const following = req.get("follow");
    try {

        const userId = req.body.userId;
        console.log("userId " + req.body.userId)
        // const userId = "sssss"
        const user_data = await Users.findById(userId).populate('post', 'post');
        // const post = await Posts.findById(user_data._id);
        console.log("user_data " + user_data)
        res.json({post : user_data})

    } catch (e) {
        res.status(500).json({
            message: "Unable to create user. Sorry for the inconvenience caused."
        });
    }
}

module.exports = {
    viewPost,
};