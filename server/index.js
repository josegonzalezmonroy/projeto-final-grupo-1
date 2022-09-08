const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dataBase = 'camisas'
const port = 3001 //foi usada a porta 3001 para se diferenciar da porta 3000 do React
const clientPort = 3000 //dominio do cliente
const routerCrud = require('./routes/crud') 

//cors para permitir o acesso do dominio do cliente no nosso servidor
const cors = require('cors')
app.use(cors({
    origin: `http://localhost:${clientPort}`
}))

app.use(express.json())

app.use(routerCrud)//rotas
app.use('/', routerCrud) /*rota principal*/

mongoose.connect(`mongodb+srv://CGJW:1234@lojaprodutos.ji5ly5i.mongodb.net/${dataBase}?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(port, () => {
            console.log('Conectado ao Mongo')
        })
    }).catch((erro) => { console.log(erro) })
