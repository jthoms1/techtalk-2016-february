'use strict';

/**
 * log function that sends apache style logs to console
 */
var logFunction = function(req, res, next) {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logFunction;
