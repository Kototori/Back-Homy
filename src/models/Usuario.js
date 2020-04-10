const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    email: String,
    password: String,
    nome: String,

});

module.exports = mongoose.model('Usuario', UsuarioSchema);