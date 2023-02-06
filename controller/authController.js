const UserModel = require('../Modules/userModule')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
// function hashpassword(req)
// {
//     req.body.password = passwordHash.generate(req.body.password)
//     req.body.passwordConfirm = passwordHash.generate(req.body.passwordConfirm)
// }

const createtoken =  id => 
    jwt.sign({id},process.env.JWT,{
    expiresIn : process.env.JWT_EXPIRES
})
exports.addUsers = async (req,res)=>{



    try {
        const newuser = await UserModel.create({
            name:req.body.name ,
            email:req.body.email,
            password:req.body.password,
            passwordConfirm:req.body.passwordConfirm
        })

        // Generate Token
        const token = createtoken(newuser._id)
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

const   catchAsync = fn => {
    return (req,res,next) => {
        fn(req,res,next).catch(err=> next(err))
    }
}

exports.login =  catchAsync  (async (req,res)=>{

        // 1) check if user exists && password correct 
        const {email, password} = req.body
        const user = await UserModel.findOne({email}).select('+password')
            
        console.log(user)
        if(!email || !password)
        {
            res.status(404).json({
                status : 'email not found',
            })
        }
        else if(! user ||! (user.correctPassword(password,user.password)))
        {
            res.status(401).json({
                status : 'user or password not correct',
            })
        }
        else {
            const token = createtoken(user._id);
            res.status(200).json({
                status : 'success',
                token
            })
        }
    } 
)