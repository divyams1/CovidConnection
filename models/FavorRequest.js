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
    favor_status: {
        type: Boolean,
        default: false
    },

    favor_title: {
        type: String,
        required: true
    },

    favor_lat: {
        type: Number,
        // required: true
    },

    favor_lng: {
        type: Number,
        // required: true
    },

    date: {
        type: Date,
        default: Date.now
    }


});

const FavorRequest = mongoose.model('favorRequest', FavorRequestSchema);
module.exports = FavorRequest;