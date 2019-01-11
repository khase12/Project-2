const mongoose =require("../db/connection")
const Schema = mongoose.Schema

const Reviews = new Schema({
    name: String,
    rating: Number,
    author: String.apply,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "parties"
    }]
  
});
module.exports = mongoose.model("Reviews", Reviews)