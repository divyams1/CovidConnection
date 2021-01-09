const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const validateRegisterInput = require('../../frontend/src/validation/register');
const validateLoginInput = require('../../frontend/src/validation/login');
const passport = require('passport');


router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email
  });
})




router.get('/:id', (req, res) => {
  console.log(req)
  console.log(req.body)
  console.log(req.params)
  
  User
    .findById( req.body )
    .then(user => 
      res.json({
        id: user.id,
        username: user.username,
        email: user.email
      })
    );


});

router.get("/", (req, res) => {
  User
    .find()
    .sort({ date: -1 })
    .then(users => res.json(users))
    .catch(err => res.status(400).json(err));
})
  
  


router.get("/test", (req, res) => {

  res.json({ msg: "This is the user route" });

});





router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      errors.username = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, username: user.username, email: user.email };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});





router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        // Use the validations to send the error
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }

      bcrypt.compare(password, user.password)
  .then(isMatch => {
    if (isMatch) {
      const payload = {id: user.id, username: user.username, email: user.email};

      jwt.sign(
        payload,
        keys.secretOrKey,
        // Tell the key to expire in one hour
        {expiresIn: 3600},
        (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token
          });
        });
    } else {
      return res.status(400).json({password: 'Incorrect password'});
    }
  })
    })
})








module.exports = router;
