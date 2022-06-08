import {getUsers, register, login, logout} from '../controllers/users.js';
import express from 'express';
import {verifyToken} from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/token',verifyToken, (req,res)=>{
    const accessToken =   req.cookies.accessToken || 
                    req.headers['x-access-token'] ||
                    req.headers['authorization']
    res.status(200).json({accessToken});
});

export default router; //using "type":"module" in package.json=>no need for export.modules
