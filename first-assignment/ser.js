const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    if (url === '/creat-user') {

        req.on('end', () =>{
            res.statusCode = 302;
            res.setHeader('Location', '/'); //redirect
            return res.end();
        });
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<ul><li>user_dummy</li><li>user_troublord</li></ul>');
        res.write('</html>');
        return res.end();
    }
    res.write('<html>');
    res.write('greeting witcher');
    res.write('<form action="create-user" method="POST">');
    res.write('<input type="text" name="username">');
    res.write('<input type="submit" value="send">');
    res.write('</form>');
    res.write('</html>');
    return res.end();    
    
});

server.listen(3001);//此時server才開始跑在port3000localhost