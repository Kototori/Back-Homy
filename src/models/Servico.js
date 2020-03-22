const mongoose = require('mongoose');

const ServicoSchema = new mongoose.Schema({
    titulo:String,
    bairro:String,
    desc:String,
    observacao:String,
    redeSocial:String,
    rua:String,
    numero:String,
    telefone:String,
    image: String,
})

module.exports = mongoose.model('Servico', ServicoSchema)