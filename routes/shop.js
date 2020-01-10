const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('in the middle ware');
    res.send('<h1>Takako Matsu</h1>');

});

module.exports = router;