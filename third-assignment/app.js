const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

const ind = require('./routes/route');

app.use(express.static(path.join(__dirname, 'public')));

app.use(ind);
app.listen(3000);
