
const express = require('express')
const app = express()
const toursrouter = require('./Routers/toursrouter')
const usersrouter = require('./Routers/userrouter')
const loginrouter = require('./Routers/loginrouter')

app.use(express.json())
//static
app.use(express.static(`${__dirname}/public`))

app.use('/tours',toursrouter)
app.use('/users',usersrouter)
app.use('/login',loginrouter)

module.exports = app

// serving static file
// process.env 