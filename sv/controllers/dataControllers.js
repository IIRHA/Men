const Data = require('../models/dataModel')//Importing dataModel into Data
const mon = require('mongoose')

//Get all data
const getAllData = async (req, res) => {
    const data = await Data.find({}).sort({ createdAt: -1 })

    res.status(200).json(data)
}

//Get single data
const getSingleData = async (req, res) => {
    const { id } = req.params
    //id validation
    if (!mon.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: '404 data not found' })

    }

    const data = await Data.findById(id)

    if (!data) {
        return res.status(404).json({ error: '404 data not found' })
    }

    res.status(200).json(data)
}

//Create new data
const createData = async (req, res) => {
    const { name, age, DOB } = req.body

    try {
        const data = await Data.create({ name, age, DOB })
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ error: error.message })
        return;
    }
}

//Delete a data
const deleteData = async (req, res) => {
    const { id } = req.params

    if (!mon.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: '404 data not found'})
    }

    const data = await Data.findOneAndDelete({ _id: id })

    if (!data) {
        return res.status(400).json({error: '404 Failed to delete. No such data'})
    }

    res.status(200).json(data)
}

//Update a data
const updateData = async (req, res) => {
    const { id } = req.params
    if (!mon.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: '404 Data not deleted'})
    }

    const data = await Data.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!data) {
        return res.status(404).json({error: '404 data not updated'})
    }

    res.status(200).json(data)
}


module.exports = {
    getAllData,
    getSingleData,
    createData,
    deleteData,
    updateData
}