import {Sequelize} from 'sequelize';
import db from '../config/db.js';

const {DataTypes} = Sequelize;

const Users = db.define('users',{
    name: { //name of column in our database
        type:DataTypes.STRING
    },
    email: {
        type:DataTypes.STRING
    },
password: {
    type:DataTypes.STRING
},
createdAt: {
    field: 'createdat', //this is the way the column is named in the database if it doesn't match with out field name in js (due to the camelcase)
    type:DataTypes.DATE
},
updatedAt: {
    field: 'updatedat',
    type:DataTypes.DATE
}
},{
    freezeTableName:true
})

export default Users;