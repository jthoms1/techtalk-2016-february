'use strict';

var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
  var jsFiles = list.filter(function(item) {
    return path.extname(item) === '.js';
  });
  console.log(jsFiles.join('\n'));
});
