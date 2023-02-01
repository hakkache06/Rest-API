
const express = require('express')
const app = express()

const toursrouter = require('./Routers/toursrouter')
const usersrouter = require('./Routers/userrouter')

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.use('/tours',toursrouter)
app.use('/users',usersrouter)

module.exports = app

// serving static file
// process.env 