const express = require('express');
const dotenv = require('dotenv');
const {getAllItems, 
    getSingleItem, 
    searchItem, 
    createItem,
    deleteItem,
    changeItem
} = require('./modules/items.js');

const app = express();
dotenv.config();

app.set('view engine','ejs');

app.listen(5500, () => {
    console.log(`listening on port 5500`);
})

app.use('/',express.static(__dirname+'/public'));

app.get('/home',(req,res)=>{
    // console.log('got a call for the list');
    res.render('/index')
    })

