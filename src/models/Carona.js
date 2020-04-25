const mongoose = require('mongoose');

const CaronaSchema = new mongoose.Schema({
    nome:String,
    nota:String,
    localSaida:String,
    localChegada:String,
    data: Date,
    valor:String,
    horaSaida: Date,
    horaChegada:Date,
    embarque:String,
    imagem:String,
    desembarque:String,
    vagas:String,
    userEmail: String,
});

module.exports = mongoose.model('Carona', CaronaSchema);