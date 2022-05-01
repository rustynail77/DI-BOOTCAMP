const http = require('http');
const server = http.createServer( (req, res) => {
    console.log('get a req from client');
    res.end('hello from first server...');
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);

})

server.listen(5000, ()=>{
    console.log('listen to port 5000');
})