const express = require('express')
const router = express.Router()
const produtos = require('../controllers/ProdutosController')

//........................PRODUCT........................//
router.get('/', produtos.mostrarProdutos)
router.get('/categoria/:categoria', produtos.mostrarProdutosPorCategoria)
router.post('/create', produtos.cadrastrarProduto)
router.get('/:id', produtos.mostrarProdutosPorId)
router.patch('/:id', produtos.editarProduto)
router.patch('/editarsem/:id', produtos.editarProdutoSem) //edit sem img
router.delete('/:id', produtos.excluirProduto)

module.exports = router 