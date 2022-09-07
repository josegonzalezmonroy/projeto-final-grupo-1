const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({//criamos o Schema para definir como serão os documentos em nossa base de dados
    nome: String,
    descricao: String,
    preco: Number,
    categoria: String
})

const Product = mongoose.model('Product', productSchema)//Product sera nossa classe para criar os novos produtos

module.exports = Product
