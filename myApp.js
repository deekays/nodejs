const { json } = require('body-parser');
var express = require('express');
var app = express();

console.log("Hello World");


function middle (req,res,next)
{
    let meth = req.method;
    let path = req.path;
    let ip = req.ip;
    console.log(`${meth} ${path} - ${ip}`);
    next();
}

app.use(middle);

app.get('/now', (req,res,next)=>{
    req.time = new Date().toString();
    next();
}, (req, res)=>{
    res.json({"time":req.time});
} )

app.get('/:word/echo', (req, res)=>{
    let word = req.params.word;
    res.json({"echo":word});
})




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
    let hello = "nope";
    if(process.env.MESSAGE_STYLE==="uppercase")
    {
        hello = "HELLO JSON";
    }
    else {
        hello = "hit else";
    }
    res.json({"message": hello});
}

app.get('/json', b);






//app.get('/json2', (req,res)=>res.json({"message": "Hello json"}) );


















 module.exports = app;
