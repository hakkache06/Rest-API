

const fs = require('fs')
const tours = JSON.parse(fs.readFileSync('./tours.json'))

exports.GetAllTours = (req,res) =>{
    res.status(200).json({
        status : 'Success',
        Data : {
            tours
        }
    })
}

exports.addTours = (req,res)=>{
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

 exports.getoneTours = (req,res) =>{
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