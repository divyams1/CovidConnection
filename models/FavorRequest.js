const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FavorRequestSchema = new Schema({
    favor_for_user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    favor_by_user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    favor_description: {
        type: String,
        required: true
    },
    favor_completed: {
        type: Boolean,
        default: false
    },

    date: {
        type: Date,
        default: Date.now
    }

});

const FavorRequest = mongoose.model('favorRequest', FavorRequestSchema);
module.exports = FavorRequest;