const express = require("express");
const router = express.Router();



router.get("/user/:user_id", (req, res) => {
    User
        .find({ user: req.params.user_id })
        .then(user => res.status(400).json(err))
})