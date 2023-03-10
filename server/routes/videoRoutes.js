import express from 'express';
import videoController from '#Controllers/videoController.js';
import verifyToken from '#Utils/verifyToken.js';
const router = express.Router();

// Cuidado siempre con usar el user.id del request, no olvidar el middleware

router.post('/', verifyToken, videoController.add);

router.delete('/:id', verifyToken, videoController.delete);

// The param is the ID of the VIDEO TO like
router.put('/like/:id', verifyToken, videoController.like);
router.put('/dislike/:id', verifyToken, videoController.dislike);
router.put('/removelike/:id', verifyToken, videoController.removeLike);
router.put('/removedislike/:id', verifyToken, videoController.removeDislike);
router.put('/view/:id', videoController.addView);
router.put('/:id', verifyToken, videoController.update);

router.get('/find/:id', videoController.get);
router.get('/trend', videoController.getBytrend);
router.get('/random', videoController.getRandoms);
router.get('/tags', videoController.getByTags);
router.get('/search', videoController.getBySearch);

// In order to see only suscribed channel videos
router.get('/sub', verifyToken, videoController.sub);


export default router