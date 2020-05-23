const axios = require('axios');
const Usuario = require('../models/Usuario');
const sendEmail = require('../functions/sendMail')

module.exports = {


    async store(request, response) {
        const userExists = await Usuario.findOne({ email: request.body.email });

        //Verifica se usuário já existe no bd e se não tiver confirmado, reenvia email de confirmação
        if (userExists && !userExists.confirmed) {
            //função para enviar email de confirmação
            return response.status(400).json({ error: 'E-mail já cadastrado, porém não confirmado. E-mail de confirmação reenviado' });
        }
        //Caso o usuário já tenho um cadastro válido
        else if (userExists && userExists.confirmed) {
            return response.status(400).json({ error: 'E-mail já cadastrado!' });
        }
        const { email,
            password,
            nome,
            fotoPerfil,
            celular,
            cpf,
            confirmed,
            numConfirm,
            nota,
            votos } = await Usuario.create(request.body);
        await sendEmail(email, numConfirm, nome);

        return response.json({
            email,
            password,
            nome,
            fotoPerfil,
            celular,
            cpf,
            confirmed,
            numConfirm,
            nota,
            votos
        });
    }
}