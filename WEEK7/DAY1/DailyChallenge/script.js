// DailyChallenge
// Part I
const {largeNumber, myDate} = require('./main');
const b = 5;
console.log(largeNumber + b);

// Part II
const http = require('http');

const server = http.createServer( (req, res) => {
    res.setHeader("content-Type", "text/html");
    res.write(`Module: ${largeNumber +b}`);
    res.end('<h1>Hi Frontend!</h1>');
})

server.listen(3000, ()=>{
    console.log('Listening carefully to port 3000');
})

// Part III
const http2 = require('http');
const server2 = http.createServer( (req, res)=>{
    res.end(`Current timestamp: ${myDate()}`);
})

server2.listen(8080, ()=>{
    console.log('Listening on port 8080');
})
