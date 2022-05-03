// Exercise 1
const http = require('http');

const server = http.createServer ((req, res) => {
    res.setHeader("content-Type", "text/html");
    res.write('<h1>This is an H1 as first response</h1>');
    res.write('<h3>The is an H3 as second response</h3>');
    res.end('<p>The is just a paragraph as last response</p>');
})

server.listen(3000, ()=>{
    console.log('Listening carefully to port 3000');
})