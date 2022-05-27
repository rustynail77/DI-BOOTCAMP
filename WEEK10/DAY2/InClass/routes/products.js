const express = require('express');
const router = express.Router();

const   { 
        _getAllProducts, 
        _getProduct, 
        _searchProduct, 
        _insertProduct,
        _deleteProduct,
        _updateProduct
        } = require('../controllers/products.js');

router.get('/search', _searchProduct);
router.get('/prd/:id',_getProduct);
router.get('/all', _getAllProducts);
router.post('/', _insertProduct);
router.delete('/:id', _deleteProduct);
router.put('/:id', _updateProduct);

module.exports = router;