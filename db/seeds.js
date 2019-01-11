const parties = require("../models/Parties")
const reviews = require ("../models/Reviews")
const user= require ("../models/User")

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

},

)



})
