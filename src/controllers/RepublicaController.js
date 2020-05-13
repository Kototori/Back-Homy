const axios = require('axios');
const Republica = require('../models/Republica');

module.exports = {
    async index(request, response) {
        const repubs = await Republica.find();
        console.log(repubs);
        console.log(JSON.stringify(repubs));
)
        return response.json(repubs);
    },


    async store(request, response) {
        console.log(request.body);
        const republicaExists = await Republica.findOne({ nomeRepublica: request.body.nomeRepublica });

        //Verifica se república já existe no bd com base no nome da república
        if (republicaExists) {
            return response.status(400).json({ error: 'República já existe' });
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
            userEmail,
            telefone,
            imovel } = request.body;
        console.log(nomeRepublica, valorAluguel);
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
            userEmail,
            telefone,
            imovel
        });
        return response.json(republica);
    },

    async update(request, response) {
        const userEmail = request.params.user;
        if (!userEmail) {
            return response.status(401).json({ error: 'email não encontrado' });
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
            telefone,
            imovel } = request.body;
        const republicas = await Republica.findOneAndUpdate({ userEmail }, {
            $set: {
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
                telefone,
                imovel
            },
        }, { new: true, omitUndefined: true })
        return response.json(republicas);
    }
}
