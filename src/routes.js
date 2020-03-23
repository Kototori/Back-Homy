const { Router } = require('express');
const routes = Router();

const RepublicaController =  require('./controllers/RepublicaController');

routes.get('/main',RepublicaController.index);
routes.post('/main',RepublicaController.store);


module.exports = routes;