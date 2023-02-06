const UserModel = require('../Modules/userModule')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// function hashpassword(req)
// {
    //     req.body.password = passwordHash.generate(req.body.password)
    //     req.body.passwordConfirm = passwordHash.generate(req.body.passwordConfirm)
    // }
    
    const   catchAsync = fn => {
        return (req,res,next) => {
            fn(req,res,next).catch(err=> next(err))
        }
    }
    
    const createtoken =  id => 
    jwt.sign({id},process.env.JWT,{
    expiresIn : process.env.JWT_EXPIRES
})

exports.addUsers =  catchAsync (async (req,res)=>{

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

})
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


exports.login = catchAsync  (async (req,res)=>{

        // 1) check if user exists && password correct 
        const {email, password} = req.body
        
        if(!email || !password)
        {
            res.status(404).json({
                status : 'email not found',
            })
        }
        const user = await UserModel.findOne({email}).select('+password')

        if(!user || ! (user.correctPassword(password,user.password)))
        {
            res.status(401).json({
                status : 'user or password not correct',
            })
        }
        const token = createtoken(user._id);
            res.status(200).json({
                status : 'success',
                token
            })
    } )

    exports.protect = async (req,res,next)=>{

        // 1) Getting token and check of it's

        // 2) Verfication

        // 3) check if user still exists

        // 4) Check if user changed password after use jwt 

        //next()
    }
