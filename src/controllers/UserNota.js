const User = require('../models/Usuario');

module.exports = {
    async votar(request, res) {
        const email = request.params.user;
        const user = await User.findOne({ email });
        var novanota = user.votos * user.nota;
        var novaMedia = ((novanota + request.body.nota) / (user.votos + 1)).toFixed(2);
        await User.findOneAndUpdate({ email }, { $set: { votos: (user.votos + 1), nota: novaMedia }})
        return res.json()
    }
}