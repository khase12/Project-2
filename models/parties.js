const mongoose =require("../db/connection")
const Schema = mongoose.Schema

const Parties = new Schema({
   time: Number,
    date: String,
    location: String,
    description: String,
    images: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Reviews"
    }]
});
module.exports = mongoose.model("Parties", Parties)