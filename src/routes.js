const { Router } = require('express');
const routes = Router();

//importação dos controllers
const RepublicaController =  require('./controllers/RepublicaController');
const ServicoController =  require('./controllers/ServicoController');
const UsuarioController =  require('./controllers/UsuarioController');
const CaronaController =  require('./controllers/CaronaController');
const SessionController =  require('./controllers/SessionController');
const UserCaronaController =  require('./controllers/UserCaronaController');
const UserRepublicaController =  require('./controllers/UserRepublicaController');
const UserServicoController =  require('./controllers/UserServicoController');


//rotas do cadastro, display e atualização de republicas
routes.get('/main',RepublicaController.index);
routes.post('/main',RepublicaController.store);
routes.put('/main/:user', RepublicaController.update);
//rotas do cadastro, display e atualização de serviços
routes.get('/servicos',ServicoController.index);
routes.post('/servicos',ServicoController.store);
routes.put('/servico/:user', ServicoController.update);
//rotas do cadastro e login de usuario
routes.post('/session', SessionController.store);
routes.post('/usuario', UsuarioController.store);
//rotas do cadastro, display e atualização de caronas
routes.get('/carona', CaronaController.index);
routes.post('/carona', CaronaController.store);
routes.put('/carona/:user', CaronaController.update);
<<<<<<< Updated upstream
=======
routes.delete('/carona/delete', CaronaController.delete);
//rotas sobre as vagas da carona
routes.post('/carona/vagas', CaronaVagaController.vagas);
routes.post('/carona/votar', CaronaVagaController.votar);
routes.post('/carona/interesse', CaronaVagaController.interesse);
routes.put('/carona/retornaInteresse', CaronaVagaController.retornaInteresse);

>>>>>>> Stashed changes
//rotas mostrando anúncios
routes.get('/userCarona/:user', UserCaronaController.index);
routes.get('/userRepublica/:user', UserRepublicaController.index);
routes.get('/userServico/:user', UserServicoController.index);




module.exports = routes;