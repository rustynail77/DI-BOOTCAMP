// Exercise 2
const http = require('http');

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const server = http.createServer ((req, res) => {
    res.end(JSON.stringify(user));
})

server.listen(8080, ()=>{
    console.log('Listening on port 8080');
})