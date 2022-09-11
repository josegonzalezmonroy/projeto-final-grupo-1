const mongoose = require('mongoose')

const produtoSchemaElas = new mongoose.Schema({//criamos o Schema para definir como serão os documentos em nossa base de dados
    nome: String,
    descricao: String,
    preco: Number,
    categoria: String
})

const ProdutoElas = mongoose.model('Elas', produtoSchemaElas)//Product sera nossa classe para criar os novos produtos

module.exports = ProdutoElas
