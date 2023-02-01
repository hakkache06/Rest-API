
const express = require('express')
const router  = express.Router()
const usercon = require('../controller/userController')

router.route('/')
.get(usercon.GetAllUsers)
.post(usercon.addUsers)

router.route('/:id')
.get(usercon.getoneUers)

module.exports = router