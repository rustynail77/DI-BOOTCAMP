const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('listening on port 3000');
})
// we need to get data from our html body (the form data), so these 2 lines are required:
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/aboutMe/:hobby', (req, res) => {
    const hobby = req.params.hobby;
    console.log('hobby: ',hobby);
    if(typeof hobby==='string' || hobby instanceof String){
        return res.json(req.params);// the return key word ends the execution of the function, 
        // so it doesn't reach the end of the "status" line that follows here
    }
    res.status(404).send('Not a string');
})

app.get('/pic',(req, res) => {
    res.sendFile(__dirname+'/images/image.html');
})

app.get('/form',(req, res) => {
    res.sendFile(__dirname+'/public/form.html');
})

app.post('/formData',(req, res) => {
    // we need to get the information from our form data, 
    // so we'll use the req.body:
    const {email, message} = req.body;
    res.send(`${email} sent you a message, saying: ${message}`)
})