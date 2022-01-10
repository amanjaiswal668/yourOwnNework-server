const express = require('express')
const app = express()

const bcrypt = require('bcrypt');

var bodyParser = require('body-parser');
var cors = require('cors')
var Users = require('../Models/UserSchema');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.options('*', cors());
app.use(cors());

// SignUp new User starts.

async function follow(req, res) {

    const following = req.get("follow");
    try {
        const user_data = await Users.findById(userId);
        user_data.following.push(following);
        await user_data.save();

    } catch (e) {
        res.status(500).json({
            message: "Unable to create user. Sorry for the inconvenience caused."
        });
    }
}

// Unfollow
async function unFollow(req, res) {

    const following = req.get("follow");
    try {
        const user_data = await Users.findById(userId);
        user_data.following = user_data.following.filter((e) =>
            e !== following
        );
        await user_data.save();

    } catch (e) {
        res.status(500).json({
            message: "Unable to create user. Sorry for the inconvenience caused."
        });
    }
}

// SignUp new user ends.


module.exports = {
    follow,
    unFollow,
};