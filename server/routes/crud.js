const express = require('express')
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

//Read
router.get('/', async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

//Update
 
//Delete

module.exports = router