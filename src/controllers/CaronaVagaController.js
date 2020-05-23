const axios = require('axios');
const Carona = require('../models/Carona');
const User = require('../models/Usuario');


// EXIBE CARONAS
module.exports = {
    async interesse(request, res) {
        const CaronaFromDb = await Carona.findOne({ userEmail: request.params.user });
        const interesses = CaronaFromDb.interesse;
        const novoInteresse = request.body.novoInteresse;
        const check = interesses.search(novoInteresse);
        console.log(check);
        const int = interesses + ' ' + novoInteresse;
        if (check == -1) {
            await Carona.findOneAndUpdate({ userEmail: request.params.user }, { $set: { interesse: int } })
            return res.json();
        }
        else {
            return res.status(400).json({ error: 'Você já está na lista de interesse' })
        }
    },

    async retornaInteresse(request, res) { // a função que é chamada acima é esta.
        const CaronaFromDb = await Carona.findOne({ userEmail: request.params.user }); // procura pelo valor de ID criado pelo mongo automaticamente
        console.log(CaronaFromDb);
        if (CaronaFromDb == null) {
            console.log('o sistema não encontrou usuários/senha na data base de caronas.');
        }
        var i = 1;
        var x = CaronaFromDb.interesse;
        var array = x.split(" ");
        console.log(array);
        var UserInteresses = [];

        while (array[i] != null) {
            const UserFromDb = await User.findOne({ email: array[i] }); // procura pelo valor de ID criado pelo mongo automaticamente            
            if (UserFromDb == null) {
                console.log('o sistema não encontrou usuários/senha na data base.');
            }
            else {
                UserInteresses.push(UserFromDb)
            }
            i++
        }
        if (array[i] == null) {
            return res.json(UserInteresses);
        }
    }
}