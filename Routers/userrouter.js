
const express = require('express')
const router  = express.Router()
const usercon = require('../controller/userController')
const auth = require('../controller/authController')


router.route('/')
.get(usercon.GetAllUsers)
.post(auth.addUsers)

router.route('/:id')
.get(usercon.getoneUers)
.delete(auth.deleteusers)

module.exports = router