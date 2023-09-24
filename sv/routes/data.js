const express = require('express')
const router = express.Router()
const { createData, getAllData, getSingleData, deleteData, updateData } = require('../controllers/dataControllers')

//GET all data
router.get('/', getAllData)

//GET single data
router.get('/:id', getSingleData)

//POST new data
router.post('/', createData)

//DELETE a piece of data
router.delete('/:id', deleteData)

//UPDATE a piece of data
router.patch('/:id', updateData)

module.exports = router