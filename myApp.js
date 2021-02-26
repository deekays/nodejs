const { json } = require('body-parser');
var express = require('express');
var app = express();

console.log("Hello World");


function a(req, res)
{
    const path = __dirname + "/views/index.html";
    res.sendFile(path);
}

app.get('/',a);

const publicPath = __dirname + "/public";

app.use('/public',express.static(publicPath));

function b(req, res)
{
    res.json({"message": "Hello json"});
}

app.get('/json', b);

app.get('/json2', (req,res)=>res.json({"message": "Hello json"}) );

app.get('/json3', res.json({"message": "Hello json"}) );


















 module.exports = app;
