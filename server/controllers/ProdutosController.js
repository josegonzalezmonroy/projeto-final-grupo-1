const Product = require('../models/Product')

async function mostrarProdutos(req, res) {
    const products = await Product.find({})
    return res.json(products)
}

async function mostrarProdutosEles(req, res) {
    const products = await Product.find({ categoria: 'ele' })
    return res.json(products)
}

async function mostrarProdutosElas(req, res) {
    const products = await Product.find({ categoria: 'ela' })
    return res.json(products)
}

async function cadrastrarProduto(req, res) {
    //acrescentar validações do create
    const nome = req.body.nome
    const descricao = req.body.descricao
    const preco = req.body.preco
    const categoria = req.body.categoria
    const imagem = req.file.filename
    const patch = `/images/${imagem}`

    const product = new Product({
        nome,
        descricao,
        preco,
        categoria,
        imagem,
        patch
    })

    //try{
    //    if(req.file && req.file.filename){
    //        product.imagem = req.file.filename
    //    }
    await product.save().then(console.log(product, 'Produto'))
    return res.status(201).json([{ 'produto': product }, { 'requisicao file': req.file }, { 'requisicao body': req.body }])
    // }catch (e) {
    //    console.error(e)
    //   return res.status(400).json()
    //   }
}

async function mostrarProdutosPorId(req, res) {
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

async function editarProduto(req, res) {
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
                categoria,
            })
            return res.json(produto)
        }
    } catch (e) {
        console.error(e)
        return res.status(400).json()
    }
}

async function excluirProduto(req, res) {
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
    mostrarProdutosEles,
    mostrarProdutosElas,
    cadrastrarProduto,
    mostrarProdutosPorId,
    editarProduto,
    excluirProduto
}
