const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
<<<<<<< HEAD

    // add more here for profiles?

=======
>>>>>>> d24008c6e0c68fddcfe5ec6b36bc5639266a7acb
})

const User = mongoose.model('users', UserSchema);

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = User = mongoose.model('User', UserSchema)
=======
module.exports = User;
>>>>>>> origin/add-favor-model
=======
module.exports = User;
>>>>>>> d24008c6e0c68fddcfe5ec6b36bc5639266a7acb
