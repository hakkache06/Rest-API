
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : [true,'must have name']
    },
    email : {
        type : String,
        require : [true, 'must have email'],
        lowercase : true,
        unique : true,
        validate : [validator.isEmail,'olease valid email']
    },
    photo : String,
    password: {
        type : String,
        required : [true, 'please provide a password'],
        minlength : 8,
        select : false

    },
    passwordConfirm :{
        type : String,
        required : [true, 'please confirm your password'],
        validate : {
            validator: function(el)
            {
                return el === this.password
            }
        }
    }

})

// Document Middleware : run before .save() and .create 
userSchema.pre('save',async function(next){
    this.password = await bcrypt.hash(this.password,12)
    this.passwordConfirm = undefined
    next()
})
//
// instance method be available on all documents \\
userSchema.methods.correctPassword =  async function (candidate, userpassword){    
    return await bcrypt.compare(candidate,userpassword)
}
const user  = mongoose.model('Users',userSchema)
module.exports = user