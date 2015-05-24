var request = require('request');
var spawn = require('child_process').spawn;
var pkg = require('./package.json');
var fs = require('fs');
var url = 'http://npmsearch.com/query?q=author:mikolalysenko&fields=id&size=10000';
request(url, { json: true }, function(e, r, obj) {
  pkg.dependencies = {};

  obj.results.map(function(res) {
    pkg.dependencies[res.id] = '*'
  });

  fs.writeFileSync('./package.json', JSON.stringify(pkg, null, '  '));

})
