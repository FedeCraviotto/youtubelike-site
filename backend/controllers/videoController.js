import { createError } from "../customErrors.js";
import Video from "../models/Video.js";
import User from "../models/User.js";
const videoController = {
  add: async (req, res, next) => {
    const newVideo = new Video({
      userId: req.user.id,
      ...req.body,
    });
    try {
      const savedVideo = await newVideo.save();
      res.status(200).json(savedVideo);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      // Primero buscamos el video, porque ese modelo tiene el userId -osea el idea del usuario duenio del video, el unico que lo deberia poder actualizar
      const video = await Video.findById(req.params.id);
      if (!video) return next(createError(404, "Video not found!"));
      // Pero despues, nos preguntamos si somos el duenio de ese video
      // porque sino lo actualiza cualquiera. Lo confrontamos con el jwt
      if (req.user.id === video.userId) {
        const updatedVideo = await Video.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );
        res.status(200).json(updatedVideo);
      } else{
        return next(createError(403, 'You can update only your videos'));
      }
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) return next(createError(404, "Video not found!"));
        
        if (req.user.id === video.userId) {
          await Video.findByIdAndDelete(req.params.id);
          res.status(200).json('Video successfully deleted');
        } else{
          return next(createError(403, 'You can delete only your videos'));
        }
      } catch (error) {
        next(error);
      }
  },
  get: async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id);
        res.status(200).json(video)
    } catch (error) {
      next(error);
    }
  },
  addView: async (req, res, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id,{
            $inc: {viewers: 1}
        });
        res.status(200).json('Added 1 view!')
    } catch (error) {
      next(error);
    }
  },
  random: async (req, res, next) => {
    try {
        // the Model.find() method returns sorted results.
        // With aggregate(), we can retrieve a sample of 40 random videos
        const videos = await Video.aggregate([{$sample:{size: 40}}]);
        res.status(200).json(videos)
    } catch (error) {
      next(error);
    }
  },
  trend: async (req, res, next) => {
    try {
        // Views : 1 --> the videos with the less views
        // Views : -1 --> the videos with the more views
        const videos = await Video.find().sort({views: -1});
        res.status(200).json(videos)
    } catch (error) {
      next(error);
    }
  },
  sub: async (req, res, next) => {
    // In the User model there's the field called suscribedUsers.
    // We will use this Array full of user IDs to fetch all their videos
    try {
        const user = await User.findById(req.user.id);
        const subscribedChannels = user.suscribedUsers;
        // Buscamos todos los canales
        const list = Promise.all(
            subscribedChannels.map((channelId) => {
                return Video.find({userId: channelId});
            })
        );

        res.status(200).json(list);

    } catch (error) {
      next(error);
    }
  },
};
export default videoController;
