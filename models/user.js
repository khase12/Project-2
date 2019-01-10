const mongoose =require("../db/connection")
const Schema = mongoose.Schema

const user= new Schema({
    Username: String,
    password: String,
    image: String,
   
});
module.exports =mongoose.model("user",user)