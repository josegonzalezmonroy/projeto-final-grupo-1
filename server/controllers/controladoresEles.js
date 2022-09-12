const Product = require('../models/Product')
const ProdutoEles = require('../models/ProdutoEles')

//produtos eles
async function mostrarProdutosEles (req, res){
    const produtos = await ProdutoEles.find({})
    return res.json(produtos)
}

//eles por id
async function mostrarProdutosElesPorId(req, res){
    const id = req.params.id
    try {
        const produto = await ProdutoEles.findById(id)
        if (produto) {//verificações do servidor dependendo do tipo de requisição
            return res.json([produto])//[] para o map poder funcionar no front
        }
        res.status(404).json()
    } catch (e) {
        console.error(e)
        return res.status(400).json()
    }
}

//cadrastrar produtos eles
async function cadastrarProdutoEles(req, res){
    const nome = req.body.nome
    const descricao = req.body.descricao
    const preco = req.body.preco
    const categoria = req.body.categoria

    const produto = new ProdutoEles({
        nome,
        descricao,
        preco,
        categoria
    }) 
    await produto.save().then(console.log(req.body, 'Produto Eles'))
    return res.status(201).json(req.body)
}

//editar produto eles
async function editarProdutoEles(req, res){
    const id = req.params.id
    const nome = req.body.nome
    const descricao = req.body.descricao
    const preco = req.body.preco
    const categoria = req.body.categoria
    try {
        const produto = await ProdutoEles.findById(id)
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

//excluir produto
async function excluirProdutoEles(){
    const id = req.params.id
    try {
        const produto = await ProdutoEles.findById(id)
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

//excluir produto
async function excluirProdutoEles(req, res){
    const id = req.params.id
    try {
        const produto = await ProdutoEles.findById(id)
        if (produto) {//verificações do servidor dependendo do tipo de requisição
            await produto.delete().then(console.log(`Produto ${id} ela removido`))
            return res.json({ msg: 'produto removido' })
        }
        return res.status().json()
    } catch (e) {
        console.error(e)
        return res.status(400).json()
    } 
}

module.exports = {
    mostrarProdutosEles, 
    mostrarProdutosElesPorId, 
    cadastrarProdutoEles, 
    editarProdutoEles,
    excluirProdutoEles
}
