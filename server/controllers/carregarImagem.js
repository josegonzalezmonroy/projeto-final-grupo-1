const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')//nome da pasta onde as imagens serao salvas
    },
    filename: function (req, file, cb) {
        const extensao = file.mimetype.split('/')[1]
        cb(null, `${file.fieldname}-${Date.now()}.${extensao}`)
    }
})

const multerControler = multer({ storage })
    .single('image')//metodo single para subir uma imagem por requisicao, 'imagem' é o nome do input

module.exports = {
    multerControler
}