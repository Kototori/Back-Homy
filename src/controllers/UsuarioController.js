const axios = require('axios');
const Usuario = require('../models/Usuario');

module.exports = {


    async auth(request, response) {
        const userFromDb = await User.find({ email: Email, password: Senha});
        if (userFromDb == null ) {
            console.log('o sistema não encontrou usuários/senha na data base.');
        }
        return response.json(userFromDb)  
              
    },




    async store(request, response) {
        const { email, password, nome } = request.body;
        const usuario = await Usuario.create({
            email,
            password,
            nome,
        });
        return response.json(Usuario);
    }
}