'use strict';

var express = require('express');
var app = express();
var port = 8080;

/*
app.use(function(req, res, next) {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});
*/

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(port);
console.log(`Seems like I am working on port ${port}.`);
