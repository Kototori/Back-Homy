const axios = require('axios');
const Usuario = require('../models/Usuario');

module.exports = {






    async store(request,response){
        const { email, password, nome } = request.body;
        const usuario = await Usuario.create({
            email,
            password,
            nome,
         });                  
            return response.json(Usuario);
        }
}