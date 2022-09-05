const express = require('express')
const mongoose = require('mongoose')//mongoose para listar as collections
const router = express.Router()
const Product = require('../models/Product')//importando nosso arquivo Produto

//create
router.post('/create', async (req, res) => {

    const name = req.body.name
    const description = req.body.description
    const price = req.body.price
    const category = req.body.category

    const product = new Product({
        name,
        description,
        price,
        category
    })
    await product.save().then(console.log(req.body, 'Produto'))

    return res.status(201).json(req.body)
})

//read collections
router.get('/show', async (req, res) => {
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        console.log(names)
        res.send(names)
    })
    
    return res.status(200)
}) 



//Read
router.get('/', async (req, res) => {
    const products = await Product.find({})
    return res.json(products)
})

//details
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const produto = await Product.findById(id)
    return res.json([produto])//[] para o map poder funcionar no front
})

//Update

//Delete

module.exports = router