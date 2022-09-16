const Carrinho = require('../models/Carrinho')

async function mostrarCarrinho(req, res) {
    const carrinho = await Carrinho.find({}).then(console.log('Carrinho'))
    return res.json(carrinho)
}

async function adicionarItem(req, res) {
    const { nome, imagem, quantidade, preco } = req.body
    const adiciona = new Carrinho({ nome, imagem, preco, quantidade: 1 })

    await adiciona.save().then(console.log(adiciona, 'Adicionando ao arrinho'))
    return res.status(201).json({ msg: 'adicionado ao carrinho' })
}

async function modificarItem(req, res) {
    const id = req.params.id
    const { nome, imagem, quantidade, preco } = req.body

    try {
        const produto = await Carrinho.findById(id)
        if (produto) {//verificações do servidor dependendo do tipo de requisição
            await produto.updateOne({
                quantidade
            })
            return res.json(produto)
        }
    } catch (e) {
        console.error(e)
        return res.status(400).json()
    }
}

async function excluirItem(req, res) {
    const id = req.params.id
    try {
        const produto = await Carrinho.findById(id)
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

async function apagarTodos(req, res){
    await Carrinho.deleteMany({}).then(console.log('Apagados Todos'))
    return res.json({msg: 'produtos removidos'})
}

module.exports = {
    mostrarCarrinho,
    adicionarItem,
    modificarItem,
    excluirItem, 
    apagarTodos
}