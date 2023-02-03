
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

    const AllTours = await Tour.find()
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

 exports.getoneTours = (req,res) =>{

    try{
        
        console.log(req.params.id)
        const getoneTours = Tour.findOne({_id: req.params.id})
        res.status(200).json({
            status : 'success',
            data :{
                getoneTours
            } 
        })


    }catch(err){
        res.status(400).json({
            status :  'fail',
            message : err
        })
    }
 
}
