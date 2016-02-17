'use strict';

var logFunction = function(req, res, next) {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logFunction;
