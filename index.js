'use strict';

var express = require('express');
var app = express();
var port = 8080;

/*
var logger = require('./log.js');
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});
*/

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(port);
console.log(`Seems like I am working on port ${port}.`);
