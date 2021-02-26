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



























 module.exports = app;
