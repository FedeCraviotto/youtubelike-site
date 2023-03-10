import express from 'express';
import commentController from '#Controllers/commentController.js';
import verifyToken from '#Utils/verifyToken.js';
const router = express.Router();

router.post('/', verifyToken, commentController.addComment);
router.delete('/:id', verifyToken, commentController.deleteComment);
router.get('/:id', commentController.getComments);


export default router;