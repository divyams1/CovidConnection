const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require("./config/keys.js").mongoURI;
const users = require("./routes/api/users");
const User = require('./models/User');
const bodyParser = require('body-parser');
const favors = require("./routes/api/favors");
const passport = require('passport');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => (console.log("Connected to MongoDB")))
    .catch(err => (console.log(err)));


app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());

// app.get("/", (req, res) =>{
//     const user = new User({
//         username: "test_user",
//         email: "test_email",
//         password: "password"
//     })
//     user.save();
//     res.send("Hello World");
// });



app.use(passport.initialize());
require("./config/passport")(passport);

// app.get("/", (req, res) => {
// const newUser = new User({
//         username: "jimmmy",
//         email: "jimjones@gmail.com",
//         password: "fyi1234",
//         password2:"fyi1234"
//       });


// });

app.use("/api/users", users);
app.use("/api/favors", favors)
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


// app.use("/api/users", users)

