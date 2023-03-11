import { createError } from "#Utils/customErrors.js";
import Video from "#Models/Video.js";
import User from "#Models/User.js";

const videoController = {
  add: async (req, res, next) => {
    const newVideo = new Video({
      userId: req.user.id,
      ...req.body,
    });
    try {
      const savedVideo = await newVideo.save();
      res.status(201).json({
        message: 'Video created successfully',
        savedVideo
      });
    } catch (err) {
      next(createError(500, err.message));
    }
  },
  update: async (req, res, next) => {
    try {
      const video = await Video.findById(req.params.id);
      // Check if we are the owners
      if (!video) return next(createError(404, "Video not found!"));
      if (req.user.id === video.userId) {
        const updatedVideo = await Video.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          // check if it's ne
          // {
          //   new: true,
          // }
        );
        res.status(200).json(updatedVideo);
      } else {
        return next(createError(403, "You can update only your videos"));
      }
    } catch (err) {
      next(createError(500, err.message));
    }
  },
  delete: async (req, res, next) => {
    try {
      const video = await Video.findById(req.params.id);
      if (!video) return next(createError(404, "Video not found!"));

      if (req.user.id === video.userId) {
        await Video.findByIdAndDelete(req.params.id);
        res.status(200).json("Video successfully deleted");
      } else {
        return next(createError(403, "You can delete only your videos"));
      }
    } catch(err) {
      next(createError(500, err.message));
    }
  },
  get: async (req, res, next) => {
    try {
      const video = await Video.findById(req.params.id);
      res.status(200).json(video);
    } catch(err) {
      next(createError(500, err.message));
    }
  },
  addView: async (req, res, next) => {
    try {
      await Video.findByIdAndUpdate(req.params.id, {
        $inc: { viewers: 1 },
      });
      res.status(200).json("Added 1 view!");
    } catch(err) {
      next(createError(500, err.message));
    }
  },
  getRandoms: async (req, res, next) => {
    try {
      const videos = await Video.aggregate([{ $sample: { size: 30 } }]);
      res.status(200).json(videos);
    } catch(err) {
      next(createError(500, err.message));
    }
  },
  getBytrend: async (req, res, next) => {
    try {
      const videos = await Video.find().sort({ views: -1 });
      res.status(200).json(videos);
    } catch(err) {
      next(createError(500, err.message));
    }
  },
  sub: async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      const subscribedChannels = user.subscribedUsers;
      const list = await Promise.all(
        subscribedChannels.map((channelId) => {
          return Video.find({ userId: channelId });
        })
      );
      // list --> multiple array of objects. Every object a channel. We mixed them all
      // sort() Descendent order --> Last created 
      res
        .status(200)
        .json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
    } catch(err) {
      next(createError(500, err.message));
    }
  },
  getByTags: async (req, res, next) => {
    const tags = req.query.tags.split(",");
    try {
      const videos = await Video.find({ tags: { $in: tags } }).limit(20);
      res.status(200).json(videos);
    } catch(err) {
      next(createError(500, err.message));
    }
  },
  getBySearch: async (req, res, next) => {
    const query = req.query.q;
    try {
      // $options -> 'i' --> case-insensitive match
      const videos = await Video.find({
        title: { $regex: query, $options: "i" },
      }).limit(40);
      res.status(200).json(videos);
    } catch(err) {
      next(createError(500, err.message));
    }
  },
  like: async (req, res, next) => {
    const userId = req.user.id;
    const videoId = req.params.id;
    try {
      // addToSet --> check for duplicated values
      // addToSet --> if already liked, pull it out.
      await Video.findByIdAndUpdate(videoId, {
        $addToSet : {likes: userId},
        $pull : {dislikes: userId}
      })
      res.status(200).json('Like added. Dislike removed');
    } catch(err) {
      next(createError(500, err.message));
    }
  },
  removeLike : async (req, res, next) => {
    const userId = req.user.id;
    const videoId = req.params.id;
    try {
      await Video.findByIdAndUpdate(videoId, {
        $pull : {likes: userId}
      })
      res.status(200).json('Like removed');
    } catch(err) {
      next(createError(500, err.message));
    }
  },
  dislike: async (req, res, next) => {
    const userId = req.user.id;
    const videoId = req.params.id;
    try {
      await Video.findByIdAndUpdate(videoId, {
        $addToSet : {dislikes: userId},
        $pull : {likes: userId}
      })
      res.status(200).json('Dislike added. Like removed');
    } catch(err) {
      next(createError(500, err.message));
    }
  },
  removeDislike : async (req, res, next) => {
    const userId = req.user.id;
    const videoId = req.params.id;
    try {
      await Video.findByIdAndUpdate(videoId, {
        $pull : {dislikes: userId}
      })
      res.status(200).json('Dislike removed');
    } catch(err) {
      next(createError(500, err.message));
    }
  },  
};
export default videoController;
