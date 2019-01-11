const Reviews = require ("../models/Reviews")


const reviewsController = {
    index: (req,res) => {
       Parties.find({}).then((Reviews) => {
            res.render('Reviews/forms', {Reviews})
       })
       
    },
    new: (req,res) => {
        res.render("app/new")
    },
    create: (req,res) => {
        console.log(req.body)
        Parties.create({
            name: req.body.name,
            rating: req.body.rating,
            author: req.body.author,
          
        }).then(Parties => {
            res.redirect("/")
        })
    },
    show: (req,res) => {
        const partiesId = req.params.id 
        Parties.findById(partiesId).then((Parties) => {
            console.log(Parties)
            res.render("app/show", {Parties})
        })
    },
}

module.exports = reviewsController