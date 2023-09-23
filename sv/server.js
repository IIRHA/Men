require('dotenv').config()
const express = require('express')
const app = express()
const mon = require('mongoose')
const dataRoutes = require('./routes/data')

//db connection
mon.connect(process.env.MON_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT} and connection`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

//Middleware BEGIN
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())//Might have to be moved to the front of the middleware. rmb to req.body in data file
//Middleware END

app.use('/api/data', dataRoutes)