
const express = require('express')
const app = express()

const fs = require('fs')

const users = JSON.parse(fs.readFileSync('./users.json'))
const toursrouter = require('./Routers/userrouter')
const usersrouter = require('./Routers/userrouter')
app.use(express.json())


// Add to controller


app.use('/tours',toursrouter)
app.use('/users',usersrouter)

// fin add to controller
// get all

const port = 8080
app.listen(port,()=>{
    console.log('Listen port 8080')
})