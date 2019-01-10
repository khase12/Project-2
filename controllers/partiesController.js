const parties = require("../models/parties")

const partiesController ={

index: (req, res) => {
    res.send('home/parties')
},
view: (req, res) => {
    res.send('view/parties')
},
create: (req, res) => {
    res.send('create/parties')
},
update: (req, res) => {
    res.send('update/parties')
},
delete: (req, res) => {
    res.send('delete/parties')
}
}
​
module.exports = partiesController