
const mongoose = require('mongoose')

const   tourSchema = new mongoose.Schema({
    name : {
        type: String
    },
    rating : {
        type: Number
    },
    price : {
         type : Number 
    }
})
/// fin Create Schema
// Add Model
const Tour =  mongoose.model("Tours",tourSchema)
module.exports = Tour