const mongoose = require('mongoose')

const produtoSchemaEles = new mongoose.Schema({//criamos o Schema para definir como serão os documentos em nossa base de dados
    nome: String,
    descricao: String,
    preco: Number,
    categoria: String
})

const ProdutoEles = mongoose.model('Eles', produtoSchemaEles)//Product sera nossa classe para criar os novos produtos

module.exports = ProdutoEles
 