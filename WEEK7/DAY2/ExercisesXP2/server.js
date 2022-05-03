// Exercise 1
const express = require('express');
const app = express();

app.listen(3000,  () => {
    console.log('server in listening on port 3000');
  })

app.use('/', express.static(__dirname+'/public'));
// you cant use '/' both here and below. it creates a conflict.
// "use" is for using a middleware

app.get('/users',(req,res)=>{
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    };
    res.json(user); //express automatically stringifies anything it sends. 
    // this json() command is only used for sending a json object.
    // the send() command is good for sending other things like the string '<h1>dfewfe</h1>'
    console.log(user);
})

// Exercise 2
app.get('/:id', (req, res) => { // the 'id' is like a variable to receive the params
    const id = req.params.id;
    res.json(req.params); //sending the info to the client
})
// we can do it with 2 params like this: user
app.get('/:p/:p1', (req, res) => {
    res.send(req.params);
})

// these 2 next lines are for getting data from an http body.
// there are also other method to do this...
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());






