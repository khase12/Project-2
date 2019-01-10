const parties = require("../models/parties")
const reviews = require ("../models/reviews")
const user= require ("../models/user")

parties.deleteMany({})
.then(() => {
return parties.create ({
    time: "7:30",
    date: "01/28/19",
    location: "4098 ohara dr forest park Ga Atlanta",
    type: "house party",
    Description:"Free Until Midnight!!!",
    images:""
}).then(() =>{

}

)



})
