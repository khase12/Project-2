const express = require('express')
const router = express.Router()
const partiesController = require('../controllers/appController')


router.get('/', partiesController.index)
router.get('/view', partiesController.view)
router.post('/create', partiesController.create)
router.patch('/update', partiesController.update)
router.delete('/delete', partiesController.delete)