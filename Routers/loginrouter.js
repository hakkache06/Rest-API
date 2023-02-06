
const express = require('express')
const router  = express.Router()
const auth = require('../controller/authController')

router.route('/')
.post(auth.login)

module.exports = router