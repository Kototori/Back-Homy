const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const UsuarioSchema = new mongoose.Schema({
    email: String,
    password: String,
    nome: String,
    fotoPerfil: String,
    celular: String,
    cpf: String,
    confirmed: { type: Boolean, default: false },
    numConfirm: { type: Number, default: function () { return Math.floor(Math.random() * 1000000); } },
    nota:{ type: Number, default: 0 },
    votos: { type: Number, default: 0 },
});
//encripta a senha
UsuarioSchema.pre('save', async function (next) {
    if (this.password) {
        this.password = await bcrypt.hash(this.password, 8);
    };
    next();
});

//compara senha com a senha criptada no bd
UsuarioSchema.methods.comparePassword = function (plaintext, callback) {
    return callback(null, bcrypt.compareSync(plaintext, this.password));
};

module.exports = mongoose.model('Usuario', UsuarioSchema);
