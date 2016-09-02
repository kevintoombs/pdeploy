var express = require('express');
var fs = require('fs');
var readline = require('readline');
var exec = require('child_process').exec;
var bodyParser = require('body-parser');
var app = express(); 
app.use('/', express.static('public'));

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
