
const express = require('express')
const fs = require('fs')
const router  = express.Router()
const usercon = require('../controller/userController')

router.route('/')
.get(GetAllUsers)
.post(addUsers)

router.route('/:id')
.get(getoneUers)

module.exports = router