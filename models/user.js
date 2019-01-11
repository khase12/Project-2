const mongoose =require("../db/connection")
const Schema = mongoose.Schema

const User= new Schema({

    Username: String,
    password: String,
    image: String,
   
});
module.exports =mongoose.model("User", User)