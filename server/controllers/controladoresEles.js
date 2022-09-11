const ProdutoEles = require('../models/ProdutoEles')

async function mostrarProdutosEles (req, res){
    const produtos = await ProdutoEles.find({})
    return res.json(produtos)
}

module.exports = {mostrarProdutosEles}
