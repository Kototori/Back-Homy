const axios = require('axios');
const Servico = require('../models/Servico');

module.exports = {
    async index(request,response){
        const userEmail = request.body.email;
        const servicos = await Servico.find( userEmail );
        return response.json(servicos);
    }
}