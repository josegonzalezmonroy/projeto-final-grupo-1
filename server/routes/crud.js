const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')//mongoose para listar as collections
const Product = require('../models/Product')//importando nosso arquivo Produto
const ProdutoElas = require('../models/ProdutoElas')
const produtosElas = require('../controllers/controladoresElas')
const ProdutoEles = require('../models/ProdutoEles')
const produtosEles = require('../controllers/controladoresEles')
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

//produtos eles
router.get('/eles', produtosEles.mostrarProdutosEles)
//produtos eles por id
router.get('/eles/:id', async (req, res) => {
    const id = req.params.id
    try {
        const produto = await ProdutoEles.findById(id)
        if (produto) {//verificações do servidor dependendo do tipo de requisição
            return res.json([produto])//[] para o map poder funcionar no front
        }
        res.status(404).json()
    } catch (e) {
        console.error(e)
        return res.status(400).json()
    }
})


//produtos elas
router.get('/elas', produtosElas.mostrarProdutosElas)
//produtos elas por id
router.get('/elas/:id', async (req, res) => {
    const id = req.params.id
    try {
        const produto = await ProdutoElas.findById(id)
        if (produto) {//verificações do servidor dependendo do tipo de requisição
            return res.json([produto])//[] para o map poder funcionar no front
        }
        res.status(404).json()
    } catch (e) {
        console.error(e)
        return res.status(400).json()
    }
})


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
router.patch('/:id', async (req, res) => {
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

router.post('/create/ela', async (req, res) => {
    //acrescentar validações do create
    const nome = req.body.nome
    const descricao = req.body.descricao
    const preco = req.body.preco
    const categoria = req.body.categoria

    const produto = new ProdutoElas({
        nome,
        descricao,
        preco,
        categoria
    })
    await produto.save().then(console.log(req.body, 'Produto Ela'))
    return res.status(201).json(req.body)
})



module.exports = router