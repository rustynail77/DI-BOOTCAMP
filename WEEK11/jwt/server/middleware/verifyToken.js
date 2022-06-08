import jwt from 'jsonwebtoken';
import Users from '../models/usersModel.js';

export const verifyToken = (req,res,next) => {
    const token =   req.cookies.accessToken || 
                    req.headers['x-access-token'] ||
                    req.headers['authorization']
if (token==null)return res.status(403).json({msg:'unauthorized'});

jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err,decode) => {
    if (err) return res.status(403).json({msg:'not verified token'});

    try {
        const user= Users.findAll({
            where:{
                email:decode.email
            }
        })
        await next(); // go to next stage of our middleware
    } catch (e) {
        console.log(e)
        return res.status(403).json({msg:'email not verified'})
    }

    
})
}