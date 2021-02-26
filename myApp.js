var express = require('express');
var app = express();

console.log("Hello World");


function a(req, res)
{
    res.send('Hello Express');
}

app.get('/',a);






























 module.exports = app;
