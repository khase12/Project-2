const mongoose =require("../db/connection")
const Schema = mongoose.Schema

const reviews = new Schema({
    title: "Best Party Ever",
    author: "Bill",
    comment: "The food was great"
  
});
module.exports = mongoose.model("reviews", reviews)