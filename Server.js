
const dotenv = require('dotenv')
const app = require('./App')

// Add Env
dotenv.config({path : './config.env'})

console.log(process.env)
const port = process.env.PORT
app.listen(port,()=>{
    console.log('Listen port 8080')
})

// Mongodb
// Document based / scalable / Flexible / Performant
// Free and open-source