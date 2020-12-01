const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const User = require('./models/User');
const bodyParser = require('body-parser');

mongoose
    .connect(db, { useNewUrlParser: true })
    .then( () => (console.log("Connected to MongoDB")))
    .catch( err => ( console.log(err)));


app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());
app.use("/api/users", users);
app.get("/", (req, res) =>{
    const user = new User({
        username: "test_user",
        email: "test_email",
        password: "password"
    })
    user.save();
    res.send("Hello World");
});



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));