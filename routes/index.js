const express = require('express')
const router = express.Router()
const partiesController = require('../Controllers/partiesController')
const reviewsController = require('../Controllers/reviewsController')


router.get('/', partiesController.index)
router.post('/', partiesController.create)
router.get('/new', partiesController.new)
router.get('/:id', partiesController.show)

router.get('/:id/review', reviewsController.index)

router.get("/:id/edit", partiesController.edit)
router.patch('/:id', partiesController.update)
router.delete('/:id', partiesController.delete)


module.exports = router

