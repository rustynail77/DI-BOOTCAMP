// checkout https://knexjs.org/ for more information
// must 'npm init' first and also install 'npm i knex pg' (or 'npm i knex mysql' etc., depending on the db client/type)
const db = require('knex')({ 
client: 'pg',
connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : 'Bubu2008',
    database : 'dvdrental'
}
});

db('country')
.select('country_id','country')
.where({country:'Israel'})
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
});

db('country')
.insert([
    {country: 'Far place'}
])
.returning('*')
.catch(err=>{
    console.log(err);
})
