const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const UsuarioSchema = new mongoose.Schema({
    email: String,
    password: String,
    nome: String,
    fotoPerfil: String,
    celular: String,
    cpf: String, 


});
//encripta a senha
UsuarioSchema.pre('save', async function(next){
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 8);
    };
    next();
});

//compara senha com a senha criptada no bd
UsuarioSchema.methods.comparePassword = function(plaintext, callback) {
    return callback(null, bcrypt.compareSync(plaintext, this.password));
};

module.exports = mongoose.model('Usuario', UsuarioSchema);
