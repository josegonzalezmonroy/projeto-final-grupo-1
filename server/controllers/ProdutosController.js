const Product = require('../models/Product')

async function mostrarProdutos(req, res) {
    const products = await Product.find({})
    return res.status(200).json(products)
}

async function mostrarProdutosPorCategoria(req, res) {
    const { categoria } = req.params
    const arr = []
    const products = await Product.find({ categoria: `${categoria}` })
    try {
        products != arr.length ?
            res.status(200).json(products) :
            res.status(404).json({ mensagem: 'Categoria nao encontrada' })
    } catch (e) {
        console.error(e, 'erro')
        return res.status(400)
    }
}

async function cadrastrarProduto(req, res) {
    try {
    const { nome, descricao, preco, categoria } = req.body
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

        nome && descricao && preco && categoria && imagem && patch ?
            (await product.save()
                .then(console.log(product, 'Produto')),
                res.status(201)
                    .json([{ mensagem: 'Cadastrado com sucesso' }])) :
            res.status(404).json({ mensagem: 'Campos requeridos' })
    } catch (e) {
        console.error(e, 'erro')
        return res.status(400).json({mensagem: 'A requisicao deve conter uma imagem'})
    }
}

async function mostrarProdutosPorId(req, res) {
    const { id } = req.params
    try {
        const produto = await Product.findById(id)

        produto ? res.json([produto]) ://[] para o map poder funcionar no front
            res.status(404).json({ mensagem: `Id: ${id} nao encontrado` })

    } catch (e) {
        console.error(e, 'erro')

        id.length != 24 &&
            res.status(400).json({ mensagem: 'Formato de id nao valido' })
    }
}
  
async function editarProduto(req, res) {
    try {
    const { id } = req.params
    const { nome, descricao, preco, categoria } = req.body
    const imagem = req.file.filename
    const patch = `/images/${imagem}`

        const produto = await Product.findById(id)
        nome && descricao && preco && categoria && imagem && patch ?

            (await produto.updateOne({
                nome,
                descricao,
                preco,
                categoria,
                imagem,
                patch
            }), res.status(202).json(produto)) :
            res.status(404).json({ mensagem: 'Campos requeridos' })
    } catch (e) {
        console.error(e)
        return res.status(400).json({mensagem: 'A requisicao deve conter uma imagem'})
    }
}

async function editarProdutoSem(req, res) {
    const { id } = req.params
    const { nome, descricao, preco, categoria } = req.body

    try {
        const produto = await Product.findById(id)
        produto ?
            (await produto.updateOne({
                nome,
                descricao,
                preco,
                categoria
            }), res.status(202).json(produto)) :
            res.status(404).json({ mensagem: 'Campos requeridos' })
    } catch (e) {
        console.error(e)
        return res.status(400).json()
    }
}

async function excluirProduto(req, res) {
    const { id } = req.params
    try {
        const produto = await Product.findById(id)

        produto ? (await produto.delete(),
            res.json({ msg: `Produto ${id} removido` })) :
            res.status(404).json({ msg: `Produto ${id} nao encontrado` })

    } catch (e) {
        console.error(e)
        id.length != 24 &&
            res.status(400).json({ mensagem: 'Formato de id nao valido' })
    }

}

module.exports = {
    mostrarProdutos,
    mostrarProdutosPorCategoria,
    cadrastrarProduto,
    mostrarProdutosPorId,
    editarProduto,
    editarProdutoSem,
    excluirProduto
}
