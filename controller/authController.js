const UserModel = require('../Modules/userModule')
const passwordHash = require('password-hash')

// function hashpassword(req)
// {
//     req.body.password = passwordHash.generate(req.body.password)
//     req.body.passwordConfirm = passwordHash.generate(req.body.passwordConfirm)
// }
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
