const axios = require('axios');
const Usuario = require('../models/Usuario');

module.exports = {
    async update(request, response) {
        const email = request.params.user;
        if (!email) {
            return response.status(401).json({ error: 'email não encontrado' });
        }
        const { confirmed, numConfirm } = request.body;
        const tempUser = await Usuario.findOne({ email });
        if (tempUser.numConfirm == numConfirm) {
            const usuario = await Usuario.findOneAndUpdate({ email }, {
                $set: {
                    confirmed
                },
            }, { new: true, omitUndefined: true })            
        return response.json(usuario);
        }
        return response.status(401).json({ error: 'Numero de confirmação inválido' });
    }
}