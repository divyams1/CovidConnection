const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const favors = require("./routes/api/favors");
const  bodyParser = require('body-parser');
const passport = require('passport');


mongoose
    .connect(db, { useNewUrlParser: true })
    .then( () => (console.log("Connected to MongoDB")))
    .catch( err => ( console.log(err)));


app.use(bodyParser.urlencoded({
    extended: false 

}))

app.use(passport.initialize());

app.get("/", (req, res) => {
const newUser = new User({
        username: "jim",
        email: "jim@jim.jim",
        password: "fyi1234"
      });


});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


app.use("/api/users", users)
app.use("/api/favors", favors)
