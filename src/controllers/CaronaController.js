const axios = require('axios');
const Carona = require('../models/Carona');

module.exports = {
    async index(request,response){
        const caronas = await Carona.find();
        return response.json(caronas);
    },


   async store(request,response){
        console.log(request.body);
        const { nome,
            nota,
            localSaida,
            localChegada,
            data,
            valor,
            horaSaida,
            horaChegada,
            embarque,
            imagem,
            desembarque,
            vagas} = request.body;
        console.log(titulo,valor);
         const carona = await Carona.create({
            nome,
            nota,
            localSaida,
            localChegada,
            data,
            valor,
            horaSaida,
            horaChegada,
            embarque,
            imagem,
            desembarque,
            vagas,
         });
        return response.json(carona);
    }
}
