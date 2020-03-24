const express = require('express');
const mongoose = require('mongoose'); 
const routes = require('./src/routes');
const cors = require('cors');

const app = express(); 

mongoose.connect('mongodb+srv://republica:leo998709@cluster0-rcrnp.mongodb.net/republica?retryWrites=true&w=majority',{
    			  
    useNewUrlParser: true,
    useUnifiedTopology: true
});

 
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(process.env.PORT || 3333);