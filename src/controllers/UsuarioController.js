const axios = require('axios');
const Usuario = require('../models/Usuario');

module.exports = {


    async store(request, response) {
        const userExists = await Usuario.findOne({ email: request.body.email, cpf: request.body.cpf });

        //Verifica se usuário já existe no bd com base no email e cpf
        if (userExists) {
            return response.status(400).json({ error: 'E-mail ou CPF já cadastrado' });
        }

        const { email,
            password,
            nome,
            fotoPerfil,
            celular,
            cpf, } = await Usuario.create(request.body);
        return response.json({
            email,
            password,
            nome,
            fotoPerfil,
            celular,
            cpf,
        });
    }
}