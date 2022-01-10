const mongoose = require("mongoose");
const { Schema } = mongoose;

const conn = require('../utils/db');
// const Posts = require("./Post");

var User = new Schema({
    name: String,
    email:  String,
    password: String,

    post : [{
        type : mongoose.Types.ObjectId,
        ref : "post"
    }],
    following : [{
        type : mongoose.Types.ObjectId,
        ref : "user"
    }],
    
});

const Users = mongoose.model("user", User)

module.exports = Users;
