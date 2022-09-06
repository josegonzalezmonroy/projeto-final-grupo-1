const Product = require('../models/Product')

async function listAllProducts (req, res){
    const products = await Product.find({})
    return res.json(products)
}

module.exports = {listAllProducts}
