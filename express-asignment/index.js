const http = require('http');

const express = require('express');

const app = express();

app.use('/damn', (req,res,next) => {
    console.log('damn beautiful');
    res.send('<h1>who the fuck</h1>');
    next();
});
app.use('/', (req,res,next) => {
    res.send('<h1>kimura</h1>');
});

app.listen(3000);