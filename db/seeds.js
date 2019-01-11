const Parties = require("../models/Parties")
const Reviews = require ("../models/Reviews")
const User=  require ("../models/User")

Parties.deleteMany({})
.then(() => {
return Parties.create ({
   title: "Ballroom party",
    date: "01/28/19",
    location: "4000 Ohara Dr, Forest Park, Atlanta, GA",
    type: "ballroom",
    Description:"White tie affair for family and friends",
    images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-J4iAH04jMjrcy4Czl3fQtX4l2l61q47UmBRhoNAaDcbL6ELL"
},

{
   title: "Underground Party",
    date: "07/03/19",
    location: "300 Party Blvd",
    type: "underground",
    Description:"Foam party for all humans 18+",
    images:"https://media.phillyvoice.com/media/images/Daybreaker.2e16d0ba.fill-735x490.2e16d0ba.fill-735x490.png"

},
{
   title: "Rooftop Party",
    date: "01/28/19",
    location: "720 Party Blvd",
    type: "rooftop",
    Description:"Rooftop party in one of the nicest areas in Atlanta",
    images:"https://media.timeout.com/images/103894603/image.jpg"


    })
})

