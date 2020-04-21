const axios = require('axios');
const Republica = require('../models/Republica');

module.exports = {
    async index(request,response){
        const repubs = await Republica.find();
        return response.json(repubs);
    },


   async store(request,response){
        console.log(request.body);
        const republicaExists = await Usuario.findOne({ nomeRepublica: request.body.nomeRepublica });

        //Verifica se república já existe no bd com base no nome da república
        if (republicaExists) {
            return response.status(400).json({ error: 'E-mail ou CPF já cadastrado' });
        }
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
            representante,
            userEmail} = request.body;
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
            representante,
            userEmail
         });
        return response.json(republica);
    }
}
