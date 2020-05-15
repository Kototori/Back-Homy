const mongoose = require('mongoose');

const RepublicaSchema = new mongoose.Schema({
    nomeRepublica: String,
    valorAluguel: Number,
    bairro: String,
    rua: String,
    numeroCasa: String,
    pessoas: String,
    descricao: String,
    animal: String,
    acomodacaoQuarto: String,
    acomodacaoRepublica: String,
    valorContas: Number,
    observacao: String,
    imagem1: String,
    imagem2: String,
    imagem3: String,
    genero: String,
    numVagas: String,
    representante: String,
    userEmail: String,
    telefone: String,
    imovel: String,
});



module.exports = mongoose.model('Republica', RepublicaSchema);
