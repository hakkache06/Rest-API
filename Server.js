
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./App')
// Add Env
dotenv.config({path : './config.env'})


// Connection DataBase
const DB = process.env.DATA_BASE.replace('<P>',process.env.PASSWORD)
mongoose.connect(DB,{
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(()=>{console.log('success')})
/// fin Connection DataBase

//fin add data
//tourmodel.insertMany({})
const port = process.env.PORT
app.listen(port,()=>{
    console.log('Listen port 8080')
})
// mongodb+srv://yhakkach:<password>@cluster0.wavscww.mongodb.net/?retryWrites=true&w=majority
// Mongodb
// Document based / scalable / Flexible / Performant
// Free and open-source
// Create db cmd : use tours
// db.tours.insertOne({name : "The Forest Hiker" , price : 10})
// db.tours.find() 
// show dbs
// show collection
// quite()
// show dbs

//CRUD
// db.collection.find()
// db.collection.insert()
// db.tours.insertMany({},{},{})
// db.tours.find({name ::})
 
// Use Query
// db.tours.find({price : {$lste : 500}})
// db.tours.find({price : {$lste : 500}, rating: {$gte: 4.8}})
// db.tours.find({$or : [ {$lste : 500}, rating: {$gte: 4.8}]} , {name:1})

// Use CRUD: UPDATING DOCUMENTS
// db.tours.updateOne({name : "exemple"},{$set : {price : 898}})
// Challenge db.tours.find($or : [{ price:{$lste : 500} , rating : {$gte :4.8 }}])
// db.tours.updateMany({},{})
// db.tours.replaceOne()

//use CRUD : DELETING DOCUMENTS
// db.tours.deleteone({name : ""})
// db.tours.deleteMany({rating : {$lt : 4.8}})
// db.tours.deleteMant({}) delete all 

//brew services restart mongodb-community 
//brew services start mongodb-community

//./mongosh "mongodb+srv://cluster0.wavscww.mongodb.net/myFirstDatabase" --apiVersion 1 --username yhakkach

// Mongoose Library Working with Mongodb
// MongoDb Driver  
// Data models 
// implement important API features
// Mongoose a higher level of abstraction and gives us a lot more functionality out of the box
// Mongoose schema : model data by describing the structure of the data
// Mongoose Model : a warpper of the schema , providing interface to the database for crud operations
// Schema -> Model
// Mongosse Middleware
    // use after saving
    // pre / post hooks
    // document , query ,aggregate , and model model middlware
/*
    MVC ARCHITECTURE IN OUR EXPRESS APP 

     CONTROLLER (APPLICATION LOGIC) :   Functions handle the application's request - send back responses
        
*/