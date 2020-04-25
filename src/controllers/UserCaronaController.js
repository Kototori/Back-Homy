const axios = require('axios');
const Carona = require('../models/Carona');

module.exports = {
    async index(request,response){
        const userEmail = request.params.user;
        if (!userEmail){
            return response.status(401).json({ error: 'email não encontrado' });
        }
        const caronas = await Carona.find( {userEmail} );
        return response.json(caronas);
    }
}