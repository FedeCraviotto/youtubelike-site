import jwt from 'jsonwebtoken';
import { createError } from './customErrors.js';

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if(!token) return next(createError(401, 'User not autheticated'));

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user)=> {
        if(error) return next(createError(403, 'Invalid token'));
        req.user = user;
        next()
    })
}

export default verifyToken;