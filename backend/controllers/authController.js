import mongoose from 'mongoose';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '../customErrors.js';
import jwt from 'jsonwebtoken';

const authController = {
    
    signUp : async (req, res, next) => {
        let hashedPass = bcrypt.hashSync(req?.body?.password, 10);
        try {
            const newUser = new User({
                ...req.body,
                password : hashedPass
            });
            await newUser.save();
            res.status(200).send('User created successfully');
        } catch(error) {
            next(error);
        }
        
    },
    signIn : async (req, res, next) => {
        try {
            const user = await User.findOne({
                email: req?.body?.email
            });
            if (!user) return next(createError(404, 'User not found'));
            const isCorrect = bcrypt.compareSync(req.body.password, user.password);
            if(!isCorrect) return next(createError(400, 'Wrong Credentials'));

            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY);

            const {password, ...safeInfo} = user._doc;

            res.cookie('accessToken', token, {
                httpOnly : true
            }).status(200).json(safeInfo);
        } catch(error) {
            next(error);
        }
        
    },
    googleSignIn : async (req, res) => {
        res.send('OK')
    },
}
export default authController;