const Schema = mongoose.Schema

const parties = new Schema({
   time: Number,
    date: Number,
    location: String,
    type: String,
    Description : String,
});