const express = require('express')
const mongoose = require('mongoose')//mongoose para listar as collections
const router = express.Router()
const Product = require('../models/Product')//importando nosso arquivo Produto
const productControllers = require('../controllers/products')

//create
router.post('/create', async (req, res) => {
    //acrescentar validações do create
    const nome = req.body.nome
    const descricao = req.body.descricao
    const preco = req.body.preco
    const categoria = req.body.categoria

    const product = new Product({
        nome,
        descricao,
        preco,
        categoria
    })
    await product.save().then(console.log(req.body, 'Produto'))
    return res.status(201).json(req.body)
})

//read collections
router.get('/show', async (req, res) => {
    mongoose.connection.db.listCollections().toArray(function (err, nomes) {
        console.log(nomes)
        res.send(nomes)
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

    const nome = req.body.nome
    const descricao = req.body.descricao
    const preco = req.body.preco
    const categoria = req.body.categoria
    try {
        const produto = await Product.findById(id)
        if (produto) {//verificações do servidor dependendo do tipo de requisição
            await produto.updateOne({
                nome,
                descricao,
                preco,
                categoria
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