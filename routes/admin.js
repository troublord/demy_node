const express = require('express');
const path = require('path');

const rootdir = require('../helper/path');

const Router = express.Router();

const products = [];


Router.get('/product', (req, res, next) => {
    res.render('product', {message:'加新產品'});
});

Router.post('/product', (req, res, next) => {
    products.push({title: req.body.title});
    
    res.redirect('/');

});

exports.routes = Router;
exports.products = products;
