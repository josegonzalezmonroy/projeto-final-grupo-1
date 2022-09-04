const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dataBase = 'market'
const port = 3001 //foi usada a porta 3000 para se diferenciar da porta 3000 do React
const clientPort = 3000 //dominio do cliente
const Product = require('./models/Product')//importando nosso arquivo Produto

const cors = require('cors')
app.use(cors({
    origin: `http://localhost:${clientPort}`
}))

app.get('/create', async (req, res) => {
    const product = await Product.create({
        name: 'Calça',
        description: 'A melhor calça do mundo',
        price: 120,
        category: 'Roupas'
    })
    res.json({ product })
})

app.get('/read', async(req, res)=>{
    const products = await Product.find({})
    res.json({ products })
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

mongoose.connect(`mongodb+srv://jose:1234@cluster0.5z55mop.mongodb.net/${dataBase}?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(port, () => {
            console.log('Conectado ao Mongo')
        })
    }).catch((erro) => { console.log(erro) })