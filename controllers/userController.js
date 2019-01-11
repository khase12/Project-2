const User = require ("../models/User")

const userController = {
index: (req,res) => {
    Parties.find({}).then((User) =>{
res.render("User/forms", {User})
    })
},
new: (req,res) => {
    res.render("app/new")
},
create: (req,res) => {
    console.log(req.body)
    Parties.create({
        Username: req.body.Username,
        password: req.body.password,
        image: req.body.image,
    
    }).then(Parties =>{
res.redirt("/")
    })
},







}