const express = require('express');
const {products} = require('./modules/data.js');

const app = express();

app.listen(5000, ()=> {
    console.log('server in listening on port 5000');
})

app.use('/',express.static(__dirname+'/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/products', (req, res) => {
   const partialData = products.map(product=>{
       return {name:product.name, price:product.price}
   })
    res.json(partialData);
})

// with the next method I can send an object id to get a specific product
app.get('/api/products/:id', (req,res)=>{ 
    const pid = req.params.id;
    const product = products.find(product=>product.id==pid);
    if(!product){
        return res.status(404).send('Not found')
    }
    res.json(product);
})

app.get('/api/search', (req,res)=>{
    const name = req.query.name;
    const res_products = products.filter(product=>product.name.toLowerCase().includes(name.toLowerCase()));
    if (res_products.length===0){
        return res.status(200).send('No match to search query');
    }
    res.json(res_products);
})

app.post('/api/products', (req,res)=>{
    // console.log(req.body);
    const new_name = req.body.name;
    const new_price = req.body.price;
    const new_product = {
        id: products.length+1,
        name: new_name,
        price: new_price
    }
    products.push(new_product);
    console.log(products);
    res.json({msg:'ok'});
})