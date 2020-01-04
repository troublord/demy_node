const fs = require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk);
    
        });//listen to certain event
    
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]; //seperate with = and take second element of the array
            fs.writeFile ('message.txt', message, (err) => { 
                res.statusCode = 302;//302 stands for redirection
                res.setHeader('Location', '/');
                return res.end();
             });//writefile and add a callback funciton in it
        });  
         
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>myfirst page</title></head>');
    res.write('<body>helo from my node js server</body>');
    res.write('</html>');
    // process.exit();
    
    res.end();

}

module.exports = requestHandler; //register requstHandler


