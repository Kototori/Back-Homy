const { Router } = require('express');
const routes = Router();

const RepublicaController =  require('./controllers/RepublicaController');
const ServicoController =  require('./controllers/ServicoController');
const UsuarioController =  require('./controllers/UsuarioController');
const CaronaController =  require('./controllers/CaronaController');



routes.get('/main',RepublicaController.index);
routes.post('/main',RepublicaController.store);
routes.get('/servicos',ServicoController.index);
routes.post('/servicos',ServicoController.store);

routes.get('/usuario', UsuarioController);//show
routes.post('/usuario', UsuarioController.store);

routes.get('/carona', CaronaController).inde;
routes.post('/carona', CaronaController.store);


module.exports = routes;