
const express = require('express')
const app = express()


const toursrouter = require('./Routers/toursrouter')
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