// const parties = require("../models/Parties")

// const partiesController ={

// index: (req, res) => {
//     res.send('home/parties')
// },
// view: (req, res) => {
//     res.send('view/parties')
// },
// create: (req, res) => {
//     res.send('create/parties')
// },
// update: (req, res) => {
//     res.send('update/parties')
// },
// delete: (req, res) => {
//     res.send('delete/parties')
// }
// }
// module.exports = partiesController

const reviews = require ("../models/Products")
const Reviews = require ("../models/Reviews")


const reviewsController = {
    index: (req,res) => {
       Parties.find({}).then((reviews) => {
            res.render('reviews/forms', {reviews})
       })
       
    },
    new: (req,res) => {
        res.render("app/new")
    },
    create: (req,res) => {
        console.log(req.body)
        Parties.create({
            parties: req.body.product,
            description: req.body.description,
            image: req.body.image,
            postDate: req.body.postDate,
          
        }).then(parties => {
            res.redirect("/")
        })
    },
    show: (req,res) => {
        const partiesId = req.params.id 
        Parties.findById(partiesId).then((parties) => {
            console.log(parties)
            res.render("app/show", {parties})
        })
    },
}

module.exports = reviewsController