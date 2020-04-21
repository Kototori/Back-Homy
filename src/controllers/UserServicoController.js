const axios = require('axios');
const Servico = require('../models/Servico');

module.exports = {
    async index(request,response){
        const userEmail = request.body.email;
        if (!userEmail){
            return response.status(401).json({ error: 'email não encontrado' });
        }
        const servicos = await Servico.find( userEmail );
        return response.json(servicos);
    }
}