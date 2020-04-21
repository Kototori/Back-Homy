const axios = require('axios');
const Republica = require('../models/Republica');

module.exports = {
    async index(request,response){
        const userEmail = request.body.email;
        if (!userEmail){
            return response.status(401).json({ error: 'email não encontrado' });
        }
        const republicas = await Republica.find( { userEmail });
        return response.json(republicas);
    }
}