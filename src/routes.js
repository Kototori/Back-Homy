const { Router } = require('express');
const routes = Router();

const RepublicaController =  require('./controllers/RepublicaController');
const ServicoController =  require('./controllers/ServicoController');

routes.get('/main',RepublicaController.index);
routes.post('/main',RepublicaController.store);
routes.get('/servicos',ServicoController.index);
routes.post('/servicos',ServicoController.store);


module.exports = routes;