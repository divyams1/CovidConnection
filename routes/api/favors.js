const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateFavorInput = require("../../validate/favors")
const Favor = require("../../models/FavorRequest")

router.get("/test", (req, res)  => {
    
    res.json({msg: "This is the favors route"});

});


router.get("/", (req, res) => {
    
    Favor
        .find()
        .sort({ date: -1 })
        .then(favors => res.json(favors))
        .catch(err => res.status(400).json(err));
})


router.get("/users/:user_id", (req, res) => {
    
    Favor
        .find({ favor_for_user_id: req.body.user_id })
        .then(favors => res.json(favors))
        .catch(err => res.status(400).json(err))
})

router.get("/:id", (req, res) => {
    
    Favor
        .findById(req.params.id)
        .then(favor => res.json(favor))
        .catch(err => res.status(400).json(err))
})



router.delete("/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
    Favor
        .findById(req.body.data._id)
        .then(favor => favor.remove())
        .then(res.json("Successfully deleted"))
        .catch(err => res.status(400).json(err))
        
})



// router.put("/:id",
//     passport.authenticate("jwt", { session: false }),
//     (req, res) => {
//         const { isValid, errors } = validateFavorInput(req.body);

//         if (!isValid) {
//             return res.status(400).json(errors);
//         }

//         const updatedFavor = {
//             favor_for_user_id: req.user.id,
//             // favor_by_user_id: "not sure",
//             favor_description: req.body.favor_description,
//             // favor_title: req.body.favor_title,
//             // favor_lat: req.body.favor_lat,
//             // favor_lng: req.body.favor_lng,
//             favor_status: false

//             // req.body.favor_status,

//         };

//         Favor.findByIdAndUpdate(req.params.id, updatedFavor, { new: true }, function (
//             err,
//             updatedFavor
//          ) {
//             if (err) {
//                 console.log("err", err);
//                 res.status(500).send(err);
//             } else {
//                 console.log("success");
//                 res.send(updatedFavor);
//             }
//          })


//     }
// )




// This route will probably be / user /: user_id
router.post("/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { isValid, errors } = validateFavorInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        console.log(req.body)

        const newFavor = new Favor({
            favor_for_user_id: req.user.id,
            favor_for_username: req.user.username,
            favor_by_user_id: null,
            favor_description: req.body.favor_description,
            favor_title: req.body.favor_title,
            favor_lat: req.body.favor_lat,
            favor_lng: req.body.favor_lng,
            favor_for_username: req.user.username, 
            favor_status: req.body.favor_status
            // req.body.favor_status,
        });
        newFavor
            .save()
            .then(favor => res.json(favor));
    }
)


router.patch('/:id',
    passport.authenticate("jwt", { session: false }),
    (req, res) => {

        console.log(req.body)
        let update;

     const filter = { _id: req.body._id };
     if (req.body.favor_status === false) {
        update = { favor_status: true, favor_by_user_id: req.user.id };
     } else {
        update = { favor_status: false, favor_by_user_id: null};
     }

        const favorr = Favor.findOneAndUpdate(filter, update, { new: true }).then(favor => res.json(favor));

    
});


    



module.exports = router;


