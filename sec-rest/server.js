var express = require('express');
var fortune = require('fortune');
var nedb = require('fortune-nedb');
var jsonapi = require('fortune-json-api');

var server = express();
var store = fortune({
adapter: {
        type: nedb,
        options: {
          dbPath: __dirname + '/.db'
        }
    },
    serializers: [{
        type: jsonapi
    }]
});

server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

server.use(function (req, res, next) {
    console.log(req.method + ' ' + req.url);
    next();
});

store.defineType('bolt', {
  nev: {type: String},
  termekek: {link: 'termek', isArray: true} 
});

store.defineType('termek', {
  nev: {type: String},
  mennyiseg: {type: Number},
  ar: {type: Number}
});

server.use(fortune.net.http(store));

var port = process.env.PORT || 8080;
store.connect().then(function () {
  server.listen(port, function () {
    console.log('App server started on port ' + port);
  });
});
