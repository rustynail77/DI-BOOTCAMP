const db = require('../connections/heroku-pg.js');

const getAllUsers = () => {
    return db('users')
    .select('id','name')
    .orderBy('name')
}

module.exports = {
    getAllUsers
};