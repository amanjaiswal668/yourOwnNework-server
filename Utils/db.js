const mongoose = require("mongoose");

// const conn = mongoose.connect("mongodb+srv://admin-amanjaiswal:Wf8MqdjZCigmQGE1@storecluster01.nt1nr.mongodb.net/papa", { useNewUrlParser: true });

const uri = "mongodb+srv://aman_jaiswal:aman_jaiswal_123@twitterclonecluster.9hj0e.mongodb.net/TwitterDB?retryWrites=true&w=majority";
const conn = mongoose.connect(uri);


module.exports = conn;