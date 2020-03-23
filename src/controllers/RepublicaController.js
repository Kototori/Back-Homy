const axios = require('axios');
const Republica = require('../models/Republica');

module.exports = {
    async index(request,response){
        const repubs = await Republica.find();
        return response.json(repubs);
    },


   async store(request,response){
        console.log(request.body);
        const { titulo,valor,bairro,pessoas,desc,animal,movelQuarto,moveisComun,valorContas,observacao,imagem, genero, numVagas,representante,redeSocial,rua,numero} = request.body;
        console.log(titulo,valor);
        // const republica = await Republica.create({
        //     titulo,
        //     valor,
        //     bairro,
        //     pessoas,
        //     desc,
        //     animal,
        //     movelQuarto,
        //     moveisComun,
        //     valorContas,
        //     observacao,
        //     imagem,
        //     genero,
        //     numVagas,
        //     representante,
        //     redeSocial,
        //     rua,
        //     numero,
        // });
        
        return response.json(republica);
    }
}
