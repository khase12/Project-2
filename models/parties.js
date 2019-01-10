const mongoose =require("../db/connection")
const Schema = mongoose.Schema

const parties = new Schema({
   time: Number,
    date: Number,
    location: String,
    type: String,
    Description: String,
    images: String
});
module.exports =mongoose.model("parties",parties)