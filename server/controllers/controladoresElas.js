const ProdutoElas = require('../models/ProdutoElas')

//produtos elas
async function mostrarProdutosElas (req, res){
    const produtos = await ProdutoElas.find({})
    return res.json(produtos)
}

//elas por id
async function mostrarProdutosElasPorId(req, res){
    const id = req.params.id
    try {
        const produto = await ProdutoElas.findById(id)
        if (produto) {//verificações do servidor dependendo do tipo de requisição
            return res.json([produto])//[] para o map poder funcionar no front
        }
        res.status(404).json()
    } catch (e) {
        console.error(e)
        return res.status(400).json()
    }
}

//cadrastrar produtos elas
async function cadastrarProdutoElas(req, res){
    const nome = req.body.nome
    const descricao = req.body.descricao
    const preco = req.body.preco
    const categoria = req.body.categoria

    const produto = new ProdutoElas({
        nome,
        descricao,
        preco,
        categoria
    }) 
    await produto.save().then(console.log(req.body, 'Produto Elas'))
    return res.status(201).json(req.body)
}

//editar produto
async function editarProdutoElas(req, res){
    const id = req.params.id
    const nome = req.body.nome
    const descricao = req.body.descricao
    const preco = req.body.preco
    const categoria = req.body.categoria
    try {
        const produto = await ProdutoElas.findById(id)
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
async function excluirProdutoElas(req, res){
    const id = req.params.id
    try {
        const produto = await ProdutoElas.findById(id)
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
    mostrarProdutosElas, 
    mostrarProdutosElasPorId, 
    cadastrarProdutoElas, 
    editarProdutoElas,
    excluirProdutoElas
}
