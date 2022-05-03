// Exercise 3
const express = require('express');
const app = express();

app.listen(3000,  () => {
    console.log('server in listening on port 3000');
  })

app.get('/', (req, res) => { 
    res.send('<h1>Is this an HTML tag?</h1>');
})