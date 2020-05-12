const express = require('express');
const mongoose = require('mongoose'); 
const routes = require('./src/routes');
const cors = require('cors');
const app = express(); 
require('dotenv').config();

mongoose.connect(process.env.MONGO_CS,{    			  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

 
app.use(cors());
app.use(express.json());
app.use(routes);



var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});
