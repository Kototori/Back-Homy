const mongoose = require('mongoose');

const RepublicaSchema = new mongoose.Schema({
    titulo:String,
    valor:String,
    bairro:String,
    pessoas:String,
    desc:String,
    animal:String,
    movelQuarto:String,
    valorContas:String,
    observacao:String,
    imagem:String,
    genero:String,
    numVagas:String,
    representante:String,
    redeSocial:String,
    rua:String,
    numero:String
});

module.exports = mongoose.model('Republica', RepublicaSchema);
