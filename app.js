const http = require('http');
const express = require('express');
const bodyP = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'pug');


app.use(bodyP.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public',)));


const adminData = require('./routes/admin');
const shoproute = require('./routes/shop');



app.use('/admin',adminData.routes);
app.use(shoproute);

app.use((req, res, next) => {
    res.render('notfound');
    // res.status(404).sendFile(path.join(__dirname, 'views', 'notfound.html'));
})

app.listen(3000);