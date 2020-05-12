const axios = require('axios');
const Servico = require('../models/Servico');



module.exports = {
    async index(request, response) {
        const serv = await Servico.find();
        return response.json(serv);
    },

    async store(request, response) {
        const { titulo, bairro, desc, observacao, redeSocial, rua, numero, telefone, image, userEmail } = request.body;
        console.log(titulo, bairro);
        const servico = await Servico.create({
            titulo,
            bairro,
            desc,
            observacao,
            redeSocial,
            rua,
            numero,
            telefone,
            image,
            userEmail
        });

        return response.json(servico);
    },

    async update(request, response) {
        const userEmail = request.params.user;
        if (!userEmail) {
            return response.status(401).json({ error: 'email não encontrado' });
        }
        const { titulo,
            bairro,
            desc,
            observacao,
            redeSocial,
            rua,
            numero,
            telefone,
            image, } = request.body;
        const servico = await Servico.findOneAndUpdate({ userEmail }, {
            $set: {
                titulo,
                bairro,
                desc,
                observacao,
                redeSocial,
                rua,
                numero,
                telefone,
                image,
            },
        }, { new: true, omitUndefined: true })
        return response.json(servico);
    }
}


