const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateFavorInput(data) {
    let errors = {};

    data.favor_description = validText(data.favor_description) ? data.favor_description : "";

    if (Validator.isEmpty(data.favor_description)) {
        errors.text = "Text field is required"
    }


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }



}

// favor_for_user_id: req.user.id,
//     favor_by_user_id: "not sure",
//         favor_description: req.body.favor_description,
//             favor_status: req.body.favor_status,



