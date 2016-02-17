'use strict';

var moment = require('moment');

exports.fromNow = function(date) {
  return moment(date).fromNow();
};

exports.toISO8601 = function(date) {
  return moment(date).toISOString();
};

exports.fullFormat = function(dateObj) {
  return moment(dateObj).format('dddd, MMMM Do YYYY, h:mm:ss a');
};
