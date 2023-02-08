import express from 'express';
import userController from '../controllers/userController.js';
const router = express.Router();


router.get('/find/:id', userController.get);
router.delete('/:id', userController.delete);

// The param is the ID of the user(channel) TO suscribe 
router.put('/sub/:id', userController.suscribe);
router.put('/sub/:id', userController.unsuscribe);

// The param is the ID of the VIDEO TO like
router.put('/like/:id', userController.like);
router.put('/like/:id', userController.dislike);

// Goes last among all put endpoints because of the /:param
router.put('/:id', userController.update);

export default router;