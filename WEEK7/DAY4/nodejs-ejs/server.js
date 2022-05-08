const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.set('view engine','ejs');

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`);
})

app.get('/',(req,res)=>{
    res.render('home'); //for home.ejs

})

app.get('/about',(req,res)=>{
    res.render('about');

})

app.get('/contact',(req,res)=>{
    res.render('contact');

})

app.get('/shop',(req,res)=>{
    const products = [
        {id:1,name:'iPhone',price:800},
        {id:2,name:'iPad',price:1800}
    ];
    res.render('shop', {data:products});

})