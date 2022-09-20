const mongoose = require('mongoose') 

//criamos o Schema para definir como serão os documentos em nossa base de dados
const productSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    preco: Number,
    categoria: String,
    cor: String,
    tamanho: String,
    imagem: String,
    patch: String,
    noCarrinho: {type: Boolean, default: false}  
    //avaliacoes: { type: Number, default: 0 },
    //data: { type: String, default: Date.now }
})

//Product sera nossa classe para criar os novos produtos
const Product = mongoose.model('Product', productSchema)

module.exports = Product
