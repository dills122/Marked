// server.js

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const fs = require('fs');

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
    console.log(fileValue);
    var writeStream = fs.createWriteStream("./public/markdown.html");
    writeStream.write(fileValue.value);
    writeStream.end();

    res.send('File is generated. Click <a href="markdown.html"> here </a> to see the file. Save/download the file using ctrl+s');

    res.send(fileValue);
});

// listen on port 8000 (for localhost) or the port defined for heroku
var port = process.env.PORT || 8000;
app.listen(port);