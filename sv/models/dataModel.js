const mon = require('mongoose')
const Schema = mon.Schema

//Schematic of db
const dataSchema = new Schema({
    name: {
        type: String,
        requried: true
    },

    age: {
        type: Number,
        required: true
    },

    DOB: {//Date of birth. DD/MM/YYYY
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mon.model('Data', dataSchema)