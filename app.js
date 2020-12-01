const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
<<<<<<< HEAD
const User = require('./models/User');
const bodyParser = require('body-parser');
=======
const favors = require("./routes/api/favors");
const  bodyParser = require('body-parser');
const passport = require('passport');

>>>>>>> frontend_auth

mongoose
    .connect(db, { useNewUrlParser: true })
    .then( () => (console.log("Connected to MongoDB")))
    .catch( err => ( console.log(err)));


app.use(bodyParser.urlencoded({
<<<<<<< HEAD
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



=======
    extended: false 

}))

app.use(passport.initialize());

app.get("/", (req, res) => {
const newUser = new User({
        username: "jimmmy",
        email: "jimjones@gmail.com",
        password: "fyi1234",
        password2:"fyi1234"
      });


});
>>>>>>> frontend_auth
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


app.use("/api/users", users)
app.use("/api/favors", favors)
