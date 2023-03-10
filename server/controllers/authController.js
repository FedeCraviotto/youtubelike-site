import User from '#Models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '#Utils/customErrors.js';
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
                httpOnly : true,
            }).status(200).json(safeInfo);
        } catch(error) {
            next(error);
        }
        
    },
    googleAuth : async (req, res, next) => {
        try {
            const user = await User.findOne({email:req.body.email});
            if(user){
                const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY);
                res.cookie('accessToken', token, {
                    httpOnly : true,
                }).status(200).json(user._doc);
            } else {
                const newUser = new User({
                    ...req.body,
                    fromGoogle: true
                })
                const savedUser = await newUser.save();
                const token = jwt.sign({id: savedUser._id}, process.env.JWT_SECRET_KEY);
                res.cookie('accessToken', token, {
                    httpOnly : true,
                }).status(200).json(savedUser);
            }
        } catch (error) {
            next(error);
        }
    },
}
export default authController;