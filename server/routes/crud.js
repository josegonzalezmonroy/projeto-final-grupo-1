const express = require('express')
const mongoose = require('mongoose')//mongoose para listar as collections
const router = express.Router()
const Product = require('../models/Product')//importando nosso arquivo Produto
const productControllers = require('../controllers/products')

//create
router.post('/create', async (req, res) => {
    //acrescentar validações do create
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
router.get('/', productControllers.listAllProducts)

//details
router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const produto = await Product.findById(id)
        if (produto) {//verificações do servidor dependendo do tipo de requisição
            return res.json([produto])//[] para o map poder funcionar no front
        }
        res.status(404).json()
    } catch (e) {
        console.error(e)
        return res.status(400).json()
    }
})

//Update
router.put('/:id', async (req, res) => {
    const id = req.params.id

    const name = req.body.name
    const description = req.body.description
    const price = req.body.price
    const category = req.body.category
    try {
        const produto = await Product.findById(id)
        if (produto) {//verificações do servidor dependendo do tipo de requisição
            await produto.updateOne({
                name,
                description,
                price,
                category
            })
            return res.json(produto)
        }
    } catch (e) {
        console.error(e)
        return res.status(400).json()
    }
})

//Delete
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const produto = await Product.findById(id)
        if (produto) {//verificações do servidor dependendo do tipo de requisição
            await produto.delete()
            return res.json({ msg: 'produto removido' })
        }
        return res.status().json()
    } catch (e) {
        console.error(e)
        return res.status(400).json()
    }
})

module.exports = router