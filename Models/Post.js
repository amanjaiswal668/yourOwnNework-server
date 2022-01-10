const mongoose = require("mongoose");
const { Schema } = mongoose;

var Post = new Schema({
    post: String,
    time:  String
    
});

const Posts = mongoose.model("post", Post)

module.exports = Posts;
