const express = require('express');
const mongoose = require('mongoose'); 
const routes = require('./src/routes');
const cors = require('cors');
const app = express(); 
require('dotenv').config();

mongoose.connect(process.env.MONGO_CS,{    			  
    useNewUrlParser: true,
    useUnifiedTopology: true
});

 
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(process.env.PORT || 3333);
