
const { Console } = require('console')
const express = require('express')
const app = express()

const fs = require('fs')

const tours = JSON.parse(fs.readFileSync('./tours.json'))
const users = JSON.parse(fs.readFileSync('./users.json'))
const toursrouter  = express.Router()
app.use(express.json())


// Add to controller
const GetAllTours = (req,res) =>{
    res.status(200).json({
        status : 'Success',
        Data : {
            tours
        }
    })
}

const   GetAllUsers = (req,res) => {
        res.status(200).json({
            status :'Success',
            data : {
                users
            }
        })
}

const WelecomTotours = (req,res) =>{
    res.status(200).send('Welecom to Tours')
}

const getoneTours = (req,res) =>{

const newid = req.params.id * 1
const findtour = tours.find(el => el.id == newid)

if(findtour)
{
    res.status(200).json({
        status : 'success',
        Data : {
            findtour
        }
    })
}
else
{
    res.status(404).json({
        status : 'Fail',
        meassge : 'Id not Valid'
    })
}
  
}

const getoneUers = (req,res) =>{

    const idusers  = req.params.id * 1
    //console.log(idusers)
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

const addTours = (req,res)=>{
    const  newid = tours[tours.length - 1].id + 1
    const   newtour = Object.assign({id : newid},req.body)
    tours.push(newtour)
    fs.writeFile('./tours.json',JSON.stringify(tours),(err)=>{

        res.status(200).json({
            status : 'success',
            Data:{
                newtour
            }
        })
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


// fin add to controller
// get all



usersrouter.route('/')
.get(GetAllUsers)
.post(addUsers)

usersrouter.route('/:id')
.get(getoneUers)

app.use('/tours',toursrouter)
app.use('/users',usersrouter)



const port = 8080
app.listen(port,()=>{
    console.log('Listen port 8080')
})