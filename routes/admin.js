const express = require('express');

const Router = express.Router();


Router.get('/test', (req, res, next) => {
    console.log('call next');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="submit" value="send">');
});

Router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');

});

module.exports = Router;