const ProdutoElas = require('../models/ProdutoElas')

async function mostrarProdutosElas (req, res){
    const produtos = await ProdutoElas.find({})
    return res.json(produtos)
}

module.exports = {mostrarProdutosElas}
