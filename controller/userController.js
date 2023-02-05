
const fs = require('fs')
const Tour = require('../Modules/tourmodule')
const users = JSON.parse(fs.readFileSync('./users.json'))
const UserModel = require('../Modules/userModule')

//get  one users

exports.getoneUers = async (req,res) =>{

    try {  
         
    const finduser = await UserModel.findById(req.params.id)
        res.status(200).json({
            status  : 'success',
            data : {
                finduser
            }
        })
    }catch(error)
    {
        res.status(404).json({
            status : 'Fail',
            message : error
        })
    } 
}

//get   all users
 exports.GetAllUsers = async (req,res) => {

    try {
        const getusers = await UserModel.find()
        res.status(200).json({
            status :'Success',
            data : {
                getusers
            }
        })
    } catch (error) {
        res.status(404).json({
            status :'fail',
            message : error 
        })
    }

}
// add users
 exports.addUsers = async (req,res)=>{

        try {
            const Addone = await UserModel.create(req.body)
            res.status(200).json({
            status : 'success',
            data :{
                    Addone
                }
            })
    
        } catch (error) {
            res.status(404).json({
                status : 'fail',
                data :{
                        error
                    }
                })
        }   
}

exports.deleteusers = async (req,res)=>{

    try {
        console.log(req.params.id)
        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status : 'success',
            data : null
        })
    } catch (error) {   
        res.status(404).json({
            status : 'fail',
            message : error
        })
    }
}   