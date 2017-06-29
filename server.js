'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var db = require('./server/db.js'); 
var routes = require('./server/routes.js');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
app.get('/api/page', routes.getAllHandler);  
app.get('/api/page/:ITEMID', routes.getOneHandler);  
app.post('/api/page', routes.postOneHandler); 
app.put('/api/page/:ITEMID', routes.updateOneHandler); 
app.delete('/api/page/:ITEMID', routes.deleteOneHandler); 


app.listen(port, function() {
 console.log(`api running on port ${port}`);
});