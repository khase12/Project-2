Parties = require ("../models/Parties")

 let partiesController = {
     index: (req,res) => {
         Parties.find({}).then((parties) => {
             console.log(parties)
             res.render("app/index", {parties})
         })
     },
     new: (req,res) => {
         res.render("app/new")
     },
     create: (req,res) => {
         Parties.create({
             time: req.body.time,
             date: req.body.date,
             location: req.body.location,
             description:req.body.description ,
             images: req.body.images,
           
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
     edit: (req,res) => {
         const parties = req.params.id 
         res.render("app/edit", {parties})
     },
     update: (req,res) => {
         const partiesId = req.params.id 
         console.log(req.body) 
         Parties.findByIdAndUpdate(partiesId, req.body, {new:true}).then((parties) => {
             res.redirect("/")
         })
     },
     delete: (req,res) => {
         const partiesId = req.params.id
         Parties.findByIdAndRemove(partiesId).then(() => {
             res.redirect("/")
         })
     }
 }
 
 module.exports = partiesController
