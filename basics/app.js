const http = require('http');
const routes = require('./route'); //add .js automatically


const server =  http.createServer(routes.handler);

server.listen(3000);//localhost of nodejs