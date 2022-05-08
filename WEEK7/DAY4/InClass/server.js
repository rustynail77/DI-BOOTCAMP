const express = require('express');
const dotenv = require('dotenv');
const {getAllProducts, 
    getProduct, 
    searchProduct, 
    createProduct,
    deleteProduct,
    changeProduct
} = require('./modules/products.js');

const app = express();
dotenv.config(); //initializing the dotenv package

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})

app.use('/',express.static(__dirname+'/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Reading products
app.get('/api/products',(req,res)=>{
    getAllProducts()
    .then(products=>{
        res.json(products);
    })
    .catch(err => {
        console.log(err);
        res.json({message:err.message});
    })
    
})

// READ get one product
app.get('/api/products/:id',(req,res)=>{
    getProduct(req.params.id)
    .then(product=>{
        res.json(product);
    })
    .catch(err => {
        console.log(err);
        res.json({message:err.message});
    })
})
// search - my url for searching will be /api/search?q=bla - some string I want to find in product name
app.get('/api/search',(req,res)=>{
    searchProduct(req.query.q)
    .then(data=>{
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.json({message:err.message});
    })
})

// insert/create new products
app.post('/api/product', (req,res)=>{
    createProduct(req.body)
    .then(data=>{
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.json({message:err.message});
    })
})

// delete a product
app.delete('/api/product/:id',(req,res)=>{
    deleteProduct(req.params.id)
    .then(data=>{
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.json({message:err.message});
    })
})

app.put('/api/cproduct/:id',(req,res)=>{
    console.log(req.body);
    changeProduct(req.params.id, req.body.cname, req.body.cprice)
    .then(data=>{
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.json({message:err.message});
    })
})
// app.put('/products')
// id => req.params.product
// name, price => req.body