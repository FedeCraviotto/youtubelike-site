import express from 'express';
import authController from '#Controllers/authController.js';

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);
router.post('/signout', authController.signOut);
router.post('/google', authController.googleAuth);

export default router;