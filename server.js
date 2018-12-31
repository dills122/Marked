// server.js

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

// public folder to store assets
app.use(express.static(__dirname + '/public'));

// routes for app
app.get('/', function(req, res) {
  res.render('home');
});

app.get('/editor', function(req, res) {
    res.render('pad');
  });

app.post('/save', function(req,res) {

    var fileValue = req.body;
    req.headers 
    console.log(fileValue);
    //console.log(req.headers);
    console.log(req.query);
    res.set({'Content-Disposition': 'attachment; filename=\"markdown.html\"','Content-type': 'text/html'});
    //res.send(fileValue, { 'Content-Disposition': 'attachment; filename=markdown.md' }); 
    res.send(fileValue);
});

// listen on port 8000 (for localhost) or the port defined for heroku
var port = process.env.PORT || 8000;
app.listen(port);