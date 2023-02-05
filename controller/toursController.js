
const { query } = require('express')
const Tour = require('../Modules/tourmodule')

//const fs = require('fs')
//const tours = JSON.parse(fs.readFileSync('./tours.json'))

// use REST API
// exports.GetAllTours = (req,res) =>{
//     res.status(200).json({
//         status : 'Success',
//         Data : {
//             tours
//         }
//     })
// }

// exports.addTours = (req,res)=>{
//     const  newid = tours[tours.length - 1].id + 1
//     const   newtour = Object.assign({id : newid},req.body)
//     tours.push(newtour)
//     fs.writeFile('./tours.json',JSON.stringify(tours),(err)=>{

//         res.status(200).json({
//             status : 'success',
//             Data:{
//                 newtour
//             }
//         })
//     })

// }

//  exports.getoneTours = (req,res) =>{
//     const newid = req.params.id * 1
//     const findtour = tours.find(el => el.id == newid)

// if(findtour)
// {
//     res.status(200).json({
//         status : 'success',
//         Data : {
//             findtour
//         }
//     })
// }
// else
// {
//     res.status(404).json({
//         status : 'Fail',
//         meassge : 'Id not Valid'
//     })
// }
  
// }

////  use Mongoose 

exports.GetAllTours = async (req,res) =>{

    try {

    //Filtering with query
    const FillterObject = {...req.query} // Hardcopy
    const excludedFields = ['page','sort','limit','fields']
    excludedFields.forEach(el => delete FillterObject[el])

    // Advanced filtering 
    let queryStr = JSON.stringify(FillterObject)
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)

    // 2) Sorting
    let AllTours = await Tour.find(JSON.parse(queryStr))

    if(req.query.sort)
    {
        AllTours = Tour.find(JSON.parse(queryStr)).sort(req.query.sort)
    }

    res.status(200).json({
        status : 'success',
        data : {
            AllTours
        }
    })    
    }catch(err){
        res.status(400).json({
            status : 'fail',
            message : err
        })
    }
 
}

exports.addTours = async (req,res)=>{
    try {        
        const newTours = await Tour.create(req.body)
        res.status(201).json({
          status : 'succes',
          data : {
                newTours
          }
        })
    } catch(err){
        res.status(400).json({
            status :  'fail',
            message : err
        })
    }
}

 exports.getoneTours = async (req,res) =>{

    try{
        
        const getoneTours =  await Tour.findById(req.params.id)
        res.status(200).json({
            status : 'success',
            data :{
                getoneTours
            } 
        })

    }catch(err){
        console.log(err)
        res.status(400).json({
            status :  'fail',
            message : err
        })
    }
 
}
exports.updatetours = async (req,res) => {
try {
      //const Tourupdate = Tour.updateOne( {_id : req.params.id} ,{$set : {price : req.body.price }})  
   const updatetour = await Tour.findByIdAndUpdate(req.params.id, req.body , {
        new:true,
        runValidators: true
    })
    res.status(200).json({
        status : 'success',
        data :{
            updatetour
        }
    })
} catch (err) {
    console.log(err)
    res.status(400).json({
        status :  'fail',
        message : err
    })
}
}

exports.deleteTours = async (req,res)=>{

    try {
        const deletone = await Tour.findByIdAndDelete(req.params.id)
        console.log(req.params.id)
        res.status(204).json({
            status : 'success',
            data : null
        })
        
    } catch (err) {
        console.log(err)
        res.status(404).json({
            status : 'fail',
            message : err
        })
    }

}
