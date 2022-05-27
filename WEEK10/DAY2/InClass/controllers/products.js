const   { 
        getAllProducts, 
        getProduct, 
        searchProduct,
        insertProduct,
        deleteProduct,
        updateProduct
        } = require('../modules/products.js');

//READ - GET get all products
const _getAllProducts = (req,res) => {
    getAllProducts()
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        res.json({msg:err.message})
    })
}

//READ - GET get one product
const _getProduct = (req,res) => {
    getProduct(req.params.id)
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        res.json({msg:err.message})
    })
}

//READ - GET search product
const _searchProduct = (req, res) => {
    searchProduct(req.query.q)
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        res.json({msg:err.message})
    })
}

//CREATE - POST insert/create product
const _insertProduct = (req, res) => {
    insertProduct(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        res.json({msg:err.message})
    })
}

//DELETE - delete a product
const _deleteProduct = (req, res) => {
    deleteProduct(req.params.id)
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        res.json({msg:err.message})
    })
}

//UPDATE - PUT - update a products
const _updateProduct = (req, res) => {
    updateProduct(req.params.id, req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        res.json({msg:err.message})
    })
}

module.exports = {
    _getAllProducts,
    _getProduct,
    _searchProduct,
    _insertProduct,
    _deleteProduct,
    _updateProduct
}