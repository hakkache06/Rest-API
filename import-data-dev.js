

/// Read file from json
/// Insert Model
/// Use conncetion mongoose
//  Method (2) : import - delete

const fs =  require('fs')
const mongoose = require('mongoose')
const   tour = require('./Modules/tourmodule')  
const dotenv = require('dotenv')
dotenv.config({path : './config.env'})

const DB_BASE = process.env.DATA_BASE.replace('<P>',process.env.PASSWORD)
mongoose.connect(DB_BASE,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{console.log('success')})

const db = JSON.parse(fs.readFileSync('./tours.json','utf-8'))

const  importData = async () =>
{
    try
    {
        await tour.create(db)

    }catch(err)
    {
        console.log(err)
    }
}

const DeleteAll = async ()=>{
    try {
        
        await tour.deleteMany()
    } catch (err) {
        
        console.log(err)
    }
}

    if(process.argv[2] == '--import')
        importData()
    else if (process.argv[2] == '--delete')
        DeleteAll()
