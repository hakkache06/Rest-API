
const express = require('express')
const fs = require('fs')
const router  = express.Router()
const users = JSON.parse(fs.readFileSync('./users.json'))

const getoneUers = (req,res) =>{

    const idusers  = req.params.id * 1
    const finduser = users.find(el => el.id == idusers)
    if(finduser)
    {
        res.status(200).json({

            status  : 'success',
            data : {
                finduser
            }
        })
    }else 
    {
        res.status(404).json({
            status : 'Fail',
            message : 'Id not Valid'
        })
    }
}

const   GetAllUsers = (req,res) => {
    res.status(200).json({
        status :'Success',
        data : {
            users
        }
    })
}

const   addUsers = (req,res)=>{

    const newidusers = users[users.length - 1].id + 1
    const newusers = Object.assign({id : newidusers},req.body)
    users.push(newusers)
    fs.writeFile('./users.json', JSON.stringify(users), (err)=>{
        res.status(200).json({

            status : 'success',
            data :{
                newusers
            }
        })
    })

}

router.route('/')
.get(GetAllUsers)
.post(addUsers)

router.route('/:id')
.get(getoneUers)

module.exports = router