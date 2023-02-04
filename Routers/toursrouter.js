
const express = require('express')
const router = express.Router()
const tourcon = require('../controller/toursController')
router.route('/')
.get(tourcon.GetAllTours)
.post(tourcon.addTours)

router.route('/:id')
.get(tourcon.getoneTours)
.patch(tourcon.updatetours)
.delete(tourcon.deleteTours)

module.exports = router