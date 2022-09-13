const Product = require('../models/Product')

async function mostrarProdutos (req, res){
    const products = await Product.find({})
    return res.json(products)
}

async function cadrastrarProduto(req, res) {
    //acrescentar validações do create
    const nome = req.body.nome
    const descricao = req.body.descricao
    const preco = req.body.preco
    const categoria = req.body.categoria

    const product = new Product({
        nome,
        descricao,
        preco,
        categoria
    })
    await product.save().then(console.log(req.body, 'Produto'))
    return res.status(201).json(req.body)
}

async function mostrarProdutosPorId(req, res){
    const id = req.params.id
    try {
        const produto = await Product.findById(id)
        if (produto) {//verificações do servidor dependendo do tipo de requisição
            return res.json([produto])//[] para o map poder funcionar no front
        }
        res.status(404).json()
    } catch (e) {
        console.error(e)
        return res.status(400).json()
    }
}

async function editarProduto(req, res){
    const id = req.params.id
    const nome = req.body.nome
    const descricao = req.body.descricao
    const preco = req.body.preco
    const categoria = req.body.categoria
    try {
        const produto = await Product.findById(id)
        if (produto) {//verificações do servidor dependendo do tipo de requisição
            await produto.updateOne({
                nome,
                descricao,
                preco,
                categoria
            })
            return res.json(produto)
        }
    } catch (e) {
        console.error(e)
        return res.status(400).json()
    }
}

async function excluirProduto(req, res){
    const id = req.params.id
    try {
        const produto = await Product.findById(id)
        if (produto) {//verificações do servidor dependendo do tipo de requisição
            await produto.delete().then(console.log(`Produto ${id} removido`))
            return res.json({ msg: 'produto removido' })
        }
        return res.status().json()
    } catch (e) {
        console.error(e)
        return res.status(400).json()
    }

}

module.exports = {
    mostrarProdutos,
    cadrastrarProduto,
    mostrarProdutosPorId,
    editarProduto,
    excluirProduto
}