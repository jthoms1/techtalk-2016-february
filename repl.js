'use strict';

var repl = require('repl');
var util = require('util');
var colors = require('colors/safe');
var dateFormatter = require('./dateFormatter');

var envName = process.env.NODE_ENV || 'development';

// open the repl session
var replServer = repl.start({
  prompt: 'Feb-Tech-Talk (' + envName + ') > '
});

// attach my modules to the repl context
replServer.context.colors = colors;
/*
replServer.context.logTodayInMulti = function() {
  var today = new Date();
  var todayISO = dateFormatter.fullFormat(today);
  var inMulti =  colors.rainbow(todayISO);
  console.log(inMulti);
};
*/
