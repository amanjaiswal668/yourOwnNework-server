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

const { getToken } = require('../Utils/jwtAuthentication')

// SignUp new User starts.

async function createUser(req, res) {

    try {
        const encoded_password = await bcrypt.hash(req.body.password, 12);
        req.body.password = encoded_password;
        const user = new Users(req.body);
        const token = getToken({ id: user.id });
        await user.save(function (err) {
            if (!err) {
                res.json({ userId: user._id, token: token });
            } else {
                res.send(err);
            }
        });

    } catch (e) {
        res.status(500).json({
            message: "Unable to create user. Sorry for the inconvenience caused."
        });
    }
}

// SignUp new user ends.

// Login user starts.


async function loginUser(req, res) {
    try {
        const email = req.body.email;
        const password = req.body.password;

        Users.findOne({ email: email }, function (err, foundUser) {
            if (err) {
                res.send("Error login the User. Please try again.");
            } else {
                if (foundUser) {
                    bcrypt.compare(password, foundUser.password, (err, result) => {
                        if (result === true) {
                            const token = getToken({ id: foundUser._id })
                            res.json({ userId: foundUser._id, token: token });
                        } else {
                            res.send("Invalid password.")
                        }
                    })
                } else {
                    res.status(404).send("User dosen't exists.");
                }
            }
        });

    } catch (err) {
        res.status(500).json({
            message: "Some Error Occurred. Please try after some time"
        })
    }
}

// Login user ends.

module.exports = {
    createUser,
    loginUser,
};