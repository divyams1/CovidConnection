const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FavorOfferSchema = new Schema({
    favor_by_user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    favor_description: {
        type: String,
        required: true
    },

});

const FavorOffer = mongoose.model('favorOffer', FavorOfferSchema);
module.exports = FavorOffer;