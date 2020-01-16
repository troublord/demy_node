const express = require('express');
const path = require('path');
const rootdir = require('../helper/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('mat', {mats: products});

});

module.exports = router;