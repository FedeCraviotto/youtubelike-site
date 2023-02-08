import express from 'express';
import userController from '../controllers/userController.js';
import verifyToken from '../verifyToken.js';
const router = express.Router();


router.get('/find/:id', userController.get);
router.delete('/:id', verifyToken, userController.delete);

// The param is the ID of the user(channel) TO suscribe 
router.put('/sub/:id', verifyToken, userController.subscribe);
router.put('/sub/:id', verifyToken, userController.unsubscribe);

// The param is the ID of the VIDEO TO like
router.put('/like/:id', verifyToken, userController.like);
router.put('/like/:id', verifyToken, userController.dislike);

// Goes last among all put endpoints because of the /:param
// UPDATE USER
router.put('/:id', verifyToken, userController.update);

export default router;