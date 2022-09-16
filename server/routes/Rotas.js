const express = require('express')
const router = express.Router()
const produtos = require('../controllers/ProdutosController')
const carrinho = require('../controllers/CarrinhoControler')

//........................PRODUCT........................//
router.get('/', produtos.mostrarProdutos)
router.post('/create', produtos.cadrastrarProduto)
router.get('/:id', produtos.mostrarProdutosPorId)
router.patch('/:id', produtos.editarProduto)
router.delete('/:id', produtos.excluirProduto)
 
//........................CARRINHO........................//
router.get('/carrinho/lista', carrinho.mostrarCarrinho)
router.post('/carrinho/adicionar', carrinho.adicionarItem)
router.patch('/carrinho/modificar/:id', carrinho.modificarItem)
router.delete('/carrinho/apagar/:id', carrinho.excluirItem)
router.delete('/carrinho/apagartodos', carrinho.apagarTodos)

module.exports = router 