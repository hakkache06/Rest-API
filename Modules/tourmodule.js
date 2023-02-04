
const mongoose = require('mongoose')

const   tourSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true,'have must name'],
        unique : true,
        trim : true
    },
    duration : {
        type :Number,
        requred:[true,'have must name']
    },
    maxGroupSize : {
        type : Number,
        required : [true, 'have must maxgroupesize']
    },
    difficulty: {
        type : String,
        required : [true,'have must difficulty']
    },
    ratingsAverage : {
        type: Number,
        default : 4.4 ,
        required : [true,'have must ratingAverge']
    },
    ratingsQuantity : {
        type: Number,
        default : 4.4 ,
        required : [true,'have must ratingQ']
    },
    price : {
         type : Number ,
         required : [true,'have must price']
    },
    priceDiscount : Number ,
    summary: {
        type : String,
        trim : true 
    },
    description : {
        type : String,
        trim : true
    },
    imageCover : {
        type : String ,
        required : [true, ' must cover image']
    },
    images : [String],

    createdAt : {
        type : Date,
        default : Date.now()
    },
    startDates : [Date]
     
})
/// fin Create Schema
// Add Model
const Tour =  mongoose.model("Tours",tourSchema)
module.exports = Tour