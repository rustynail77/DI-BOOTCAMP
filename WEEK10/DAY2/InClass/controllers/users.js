const {getAllUsers} = require('../modules/users.js');

const _getAllUsers = (req,res) => {
    getAllUsers()
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        res.json({msg:err.message})
    })
}

module.exports = {
    _getAllUsers
};