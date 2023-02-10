import express from 'express';
import videoController from '../controllers/videoController.js';
import verifyToken from '../verifyToken.js';
const router = express.Router();

// Cuidado siempre con usar el user.id del request, no olvidar el middleware

router.get('/find/:id', videoController.get);
router.post('/', verifyToken, videoController.add);
router.delete('/:id', verifyToken, videoController.delete);
router.put('/:id', verifyToken, videoController.update);

router.put('/view/:id', videoController.addView);
router.get('/trend', videoController.getBytrend);
router.get('/random', videoController.getRandoms);
router.get('/tags', videoController.getByTags);
router.get('/search', videoController.getBySearch);

// In order to see only suscribed channel videos
router.get('/sub', verifyToken, videoController.sub);


export default router