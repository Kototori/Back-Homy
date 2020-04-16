const { Router } = require('express');
const routes = Router();

//importação dos controllers
const RepublicaController =  require('./controllers/RepublicaController');
const ServicoController =  require('./controllers/ServicoController');
const UsuarioController =  require('./controllers/UsuarioController');
const CaronaController =  require('./controllers/CaronaController');
const SessionController =  require('./controllers/SessionController');



//rotas do cadastro e display de republicas
routes.get('/main',RepublicaController.index);
routes.post('/main',RepublicaController.store);
//rotas do cadastro e display de serviços
routes.get('/servicos',ServicoController.index);
routes.post('/servicos',ServicoController.store);
//rotas do cadastro e login de usuario
routes.post('/session', SessionController.store);
routes.post('/usuario', UsuarioController.store);
//rotas do cadastro e display de caronas
routes.get('/carona', CaronaController.index);
routes.post('/carona', CaronaController.store);


module.exports = routes;