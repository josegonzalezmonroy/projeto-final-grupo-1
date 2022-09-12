const express = require('express')
const router = express.Router()
const produtosElas = require('../controllers/controladoresElas')
const produtosEles = require('../controllers/controladoresEles')
const produtos = require('../controllers/produtos')

//........................ELES........................//
router.get('/eles', produtosEles.mostrarProdutosEles) 
router.get('/eles/:id', produtosEles.mostrarProdutosElesPorId) 
router.post('/eles/cadastrar', produtosEles.cadastrarProdutoEles)
router.patch('/eles/editar/:id', produtosEles.editarProdutoEles)
router.delete('/eles/excluir/:id', produtosEles.excluirProdutoEles)
router.delete('/eles/excluir/:id', produtosEles.excluirProdutoEles)

//........................ELAS........................//
router.get('/elas', produtosElas.mostrarProdutosElas)
router.get('/elas/:id', produtosElas.mostrarProdutosElasPorId)
router.post('/elas/cadastrar', produtosElas.cadastrarProdutoElas)
router.patch('/elas/editar/:id', produtosElas.editarProdutoElas)
router.delete('/elas/excluir/:id', produtosElas.excluirProdutoElas)

//........................PRODUCT........................//
router.get('/', produtos.mostrarProdutos)
router.post('/create', produtos.cadrastrarProduto)
router.get('/:id', produtos.mostrarProdutosPorId)
router.patch('/:id', produtos.editarProduto)
router.delete('/:id', produtos.excluirProduto)

module.exports = router