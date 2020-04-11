const axios = require('axios');
const Republica = require('../models/Republica');

module.exports = {
    async index(request,response){
        const repubs = await Republica.find();
        return response.json(repubs);
    },


   async store(request,response){
        console.log(request.body);
        const { nomeRepublica,
            valorAluguel,
            bairro,
            rua,
            numeroCasa,
            pessoas,
            descricao,
            animal,
            acomodacaoQuarto,
            acomodacaoRepublica,
            valorContas,
            observacao,
            imagem1,
            imagem2,
            imagem3,
            genero,
            numVagas,
            representante} = request.body;
        console.log(titulo,valor);
         const republica = await Republica.create({
            nomeRepublica,
            valorAluguel,
            bairro,
            rua,
            numeroCasa,
            pessoas,
            descricao,
            animal,
            acomodacaoQuarto,
            acomodacaoRepublica,
            valorContas,
            observacao,
            imagem1,
            imagem2,
            imagem3,
            genero,
            numVagas,
            representante
         });
        return response.json(republica);
    }
}
