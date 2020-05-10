const mongoose = require('mongoose');

const CaronaSchema = new mongoose.Schema({
    nome:String,
    nota:String,
    localSaida:String,
    localChegada:String,
    data: {type: Date, expires: 86400},
    valor:String,
    horaSaida: String,
    horaChegada:String,
    embarque:String,
    imagem:String,
    desembarque:String,
    vagas:String,
    userEmail: String,
    telefone: String,
});

module.exports = mongoose.model('Carona', CaronaSchema);