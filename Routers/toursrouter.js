
const express = require('express')
const router = express.Router()

const tours = JSON.parse(fs.readFileSync('./tours.json'))

const GetAllTours = (req,res) =>{
    res.status(200).json({
        status : 'Success',
        Data : {
            tours
        }
    })
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
router.route('/')
.get(GetAllTours)
.post(addTours)

router.route('/:id')
.get(getoneTours)

module.exports = router