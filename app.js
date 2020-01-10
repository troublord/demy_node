const http = require('http');
const express = require('express');
const bodyP = require('body-parser');

const app = express();


app.use(bodyP.urlencoded({extended: false}));

const adminroute = require('./routes/admin');
const shoproute = require('./routes/shop');

app.use(adminroute);
app.use(shoproute);



app.listen(3000);