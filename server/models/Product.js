const mongoose = require('mongoose') 

const productSchema = new mongoose.Schema({//criamos o Schema para definir como serão os documentos em nossa base de dados
    nome: String,
    descricao: String,
    preco: Number,
    categoria: String,
    imagem: String,
    patch: String  
    //avaliacoes: { type: Number, default: 0 },
    //data: { type: String, default: Date.now }
})

const Product = mongoose.model('Product', productSchema)//Product sera nossa classe para criar os novos produtos

module.exports = Product
