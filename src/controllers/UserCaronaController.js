const axios = require('axios');
const Carona = require('../models/Carona');

module.exports = {
    async index(request,response){
        const userEmail = request.body.email;
        const caronas = await Carona.find( userEmail );
        return response.json(caronas);
    }
}