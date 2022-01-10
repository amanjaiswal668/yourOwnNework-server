const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./Routes/UserRoutes');
const tweetRoutes = require('./Routes/TweetRoutes');
const viewTweetsRoutes = require('./Routes/ViewPostRoutes');
const port = 4000;


const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://aman_jaiswal:aman_jaiswal_123@twitterclonecluster.9hj0e.mongodb.net/TwitterDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

mongoose.connection.once("open", () => {
    console.log("Connected to the database")
}).on("error", (error) => {
    console.log("Failed to connect " + error)
})

app.use(cors());
app.use(bodyParser.json());
app.use(userRouter);
app.use(tweetRoutes);
app.use(viewTweetsRoutes);

app.listen(port, function () {
    console.log("App listening to port 4000")
});