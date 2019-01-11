const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Reviews = new Schema({
    name: String,
    rating: Number,
    review: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Parties"
    }]
  
});
module.exports = mongoose.model("Reviews", Reviews)