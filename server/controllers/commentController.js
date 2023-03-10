import { createError } from '#Utils/customErrors.js';
import Comment from '#Models/Comment.js';
import Video from '#Models/Video.js';
const commentController = {
    addComment : async (req, res, next) =>{
        const newComment = new Comment({...req.body, userId:req.user.id})
        try {
            const savedComment = await newComment.save();
            res.status(200).send(savedComment);
        } catch (error) {
            next(error)
        }
    },
    deleteComment : async (req, res, next) =>{
        try {
            const comment = await Comment.findById(req.params.id)
            const video = await Video.findById(req.params.id)
            if (req.user.id === comment.userId || req.user.id === video.userId){
                await Comment.findByIdAndDelete(req.params.id)
                res.status(200).json('Comment deleted')
            } else {
                return next(createError(403, "You can delete only your own comments"))
            }
        } catch (error) {
            next(error)
        }
    },
    getComments : async (req, res, next) =>{
        try {
            const comments = await Comment.find({videoId: req.params.id})
            res.status(200).json(comments);
        } catch (error) {
            next(error)
        }
    },
}
export default commentController;