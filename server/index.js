const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3001 //foi usada a porta 3000 para se diferenciar da porta 3000 do React
const Product = require('./models/Product')//importando nosso arquivo Produto

mongoose.connect('mongodb+srv://jose:1234@cluster0.5z55mop.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Conectado ao Mongo')
    })
    .catch((erro) => { console.log(erro) })


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