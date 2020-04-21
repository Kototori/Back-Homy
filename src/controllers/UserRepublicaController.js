const axios = require('axios');
const Republica = require('../models/Republica');

module.exports = {
    async index(request,response){
        const userEmail = request.body.email;
        const republicas = await Republica.find( { userEmail });
        return response.json(republicas);
    }
}