const db = require('../connections/heroku-pg.js');


const getAllProducts = () => {
    return db('products')
    .select('id','name','price')
    .orderBy('name')
}

const getProduct = (product_id) => {
    return db('products')
    .select('id','name','price')
    .where({id:product_id})
}

const searchProduct = (query) => {
    return db('products')
    .select('id','name','price')
    .whereILike('name', `%${query}%`)
}

const insertProduct = (product) => {
    return db('products')
    .insert(product)
    .returning('*')
}

const deleteProduct = (id) => {
    return db('products')
    .where({id:id}).delete()
    .del()
    .returning('*')
}

const updateProduct = (id, product) => {
    return db('products')
    .update(product)
    .where({id:id})
    .returning('*')
}

module.exports = {
    getAllProducts,
    getProduct,
    searchProduct,
    insertProduct,
    deleteProduct,
    updateProduct
}

