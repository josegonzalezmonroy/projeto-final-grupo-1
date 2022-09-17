const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')//cors para permitir o acesso do dominio do cliente no nosso servidor
const app = express()
const host = 'http://localhost:'
const port = 3001 //foi usada a porta 3001 para se diferenciar da porta 3000 do React
const clientPort = 3000 //dominio do cliente
const dataBase = 'camisas'
const rotas = require('./routes/Rotas')
const upload = require('./controllers/CarregarImagem')

app.use(express.json())
app.use(cors({origin: `${host}${clientPort}`}))

//multer
app.use(upload.multerControler)

//rotas 
app.use(rotas)

//arquivos estaticos 
app.use(express.static('public'))

mongoose.connect(`mongodb+srv://CGJW:1234@lojaprodutos.ji5ly5i.mongodb.net/${dataBase}?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(port, () => {
            console.log('Conectado ao Mongo')
        })
    }).catch((erro) => { console.log(erro) })


