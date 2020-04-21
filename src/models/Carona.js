const mongoose = require('mongoose');

const CaronaSchema = new mongoose.Schema({
    nome:String,
    nota:String,
    localSaida:String,
    localChegada:String,
    data: String,
    valor:String,
    horaSaida:String,
    horaChegada:String,
    embarque:String,
    imagem:String,
    desembarque:String,
    vagas:String,
    userEmail: String,
});

module.exports = mongoose.model('Carona', CaronaSchema);