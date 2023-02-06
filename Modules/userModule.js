
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
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
    console.log(this)
    this.password = await bcrypt.hash(this.password,12)
    this.passwordConfirm = undefined
    next()
})
//

const user  = mongoose.model('Users',userSchema)
module.exports = user