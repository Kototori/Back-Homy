const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');


module.exports = {
    async store(request, response) {

        const { email, password } = request.body;
        //verifica email/usuario
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return response.status(401).json({ error: 'usuario não encontrado' });
        }
        //compara senha com a senha criptada no bd
        usuario.comparePassword(request.body.password, (error, match) => {
            if (!match) {
                return response.status(401).send({ message: "Senha inválida" });
            }
        });

        const { nome } = usuario;
        //gera o token
        return response.json({
            usuario: {
                nome, email,
            },
            token: jwt.sign({ nome }, '03c320353f0c534eccfa42baceaf605c', { expiresIn: '7d', })
        })
    }
}