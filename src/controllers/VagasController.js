const axios = require('axios');
const Carona = require('../models/Carona');
const User = require('../models/Usuario');


// EXIBE CARONAS
module.exports = {
    async vagas(request, response) { //FUNÇÃO DA LISTA DE INTERESSE: VÊ SE TEM VAGA NO CARRO E DIMINUI AS vagas NO CARRO       
        const userEmail = request.params.user;
        const CaronaFromDb = await Carona.findOne({ userEmail: userEmail });
        console.log(CaronaFromDb)
        if (CaronaFromDb.vagas > 0) {
            await Carona.findOneAndUpdate({ userEmail }, {
                $set: { vagas: (CaronaFromDb.vagas - 1) }
            }, { new: true, omitUndefined: true })
        } else {
            return response.status(400).json({ error: 'Vagas preenchidas' })
        }
        return response.json()
    }
}