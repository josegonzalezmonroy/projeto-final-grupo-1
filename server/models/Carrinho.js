const mongoose = require('mongoose') 

const carrinhoSchema = new mongoose.Schema({
    nome: String,
    imagem: String,
    preco: Number,
    quantidade: Number
})
   
const Carrinho = mongoose.model('Carrinho', carrinhoSchema)

module.exports = Carrinho 