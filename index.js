'use strict';

var express = require('express');
var app = express();
var port = 8080;
var logger = require('./utils/log');

app.get('/', logger, function(req, res) {
  res.send('hello world');
  console.log('damn');
});

app.get('/stuff', function(req, res) {
  res.send('stuff');
})

app.listen(port);
console.log(`Seems like I am working on port ${port}.`);
