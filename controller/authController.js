const UserModel = require('../Modules/userModule')
const jwt = require('jsonwebtoken')

// function hashpassword(req)
// {
//     req.body.password = passwordHash.generate(req.body.password)
//     req.body.passwordConfirm = passwordHash.generate(req.body.passwordConfirm)
// }
exports.addUsers = async (req,res)=>{

    try {
        const newuser = await UserModel.create({
            name:req.body.name ,
            email:req.body.email,
            password:req.body.password,
            passwordConfirm:req.body.passwordConfirm
        })

     
        // Generate Token
        const token = jwt.sign({id : newuser._id},process.env.JWT,{
            expiresIn : process.env.JWT_EXPIRES
        })

        res.status(200).json({
        status : 'success',
        token,
        data :{
                newuser
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
