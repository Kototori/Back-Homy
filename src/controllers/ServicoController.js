const axios = require('axios');
const Servico = require('../models/Servico');



module.exports = {
    async index(request,response){
        const serv = await Servico.find();
        return response.json(serv);
    },

   async store(request,response){
    const { titulo,bairro,desc,observacao,redeSocial,rua,numero,telefone,image,userEmail} = request.body;
   console.log(titulo,bairro);
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
    }
}

