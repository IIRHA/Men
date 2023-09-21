require('dotenv').config()
const express = require('express')
const app = express()
const dataRoutes = require('./routes/data')

//listening
app.listen(process.env.PORT, () => {
    console.log('listening port 4000')
})

//Middleware BEGIN
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())//Might have to be moved to the front of the middleware. rmb to req.body in data file
//Middleware END
app.use('/api/data', dataRoutes)