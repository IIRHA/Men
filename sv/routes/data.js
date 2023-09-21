const express = require('express')
const router = express.Router()

//GET all data
router.get('/', (req, res) => {
    res.send('GET all data GET thing')
})

//GET single data
router.get('/:id', (req, res) => {
    res.send('In an :id thing. It can change apparently. GET a single piece of data')
})

//POST new data
router.post('/', (req, res) => {
    res.send('This is the POST thing')
})

//DELETE a piece of data
router.delete('/:id', (req, res) => {
    res.send('DELETE a piece of data')
})

//UPDATE a piece of data
router.patch('/:id', (req, res) => {
    res.send('UPDATE some piece of data')
})

module.exports = router