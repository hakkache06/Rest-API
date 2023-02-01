
const dotenv = require('dotenv')
const app = require('./App')

// Add Env
dotenv.config({path : './config.env'})

console.log(process.env)
const port = 8080
app.listen(port,()=>{
    console.log('Listen port 8080')
})