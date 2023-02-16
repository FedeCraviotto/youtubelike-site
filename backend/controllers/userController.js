import { createError } from "../customErrors.js";
import User from "../models/User.js";

const userController = {
  get: async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
  },
  update: async (req, res, next) => {
    if (req.params.id === req.user.id) {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (error) {
        next(error)
      }
    } else {
      return next(createError(403, "You can update only your account"));
    }
  },
  delete: async (req, res, next) => {
    if (req.params.id === req.user.id) {
      try {
        await User.findByIdAndDelete(
          req.params.id,
        );
        res.status(200).json('User successfully deleted');
      } catch (error) {}
    } else {
      return next(createError(403, "You can update only your account"));
    }
  },
  
  subscribe: async (req, res, next) => {
    try {
        // El usuario logeado pushea al canal. Su id esta en el user via JWT
        await User.findByIdAndUpdate(req.user.id, {
            $push: {subscribedUsers: req.params.id}
        })
        // Por param nos llega el canal AL QUE se suscribio el usuario.
        // Ese canal suma 1 subscriber
        await User.findByIdAndUpdate(req.params.id, {
            $inc:{subscribers: 1},
        })
        res.status(200).json('Sucessfully subscribed ')
    } catch (error) {
        next(error)
    }
  },
  unsubscribe: async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $pull: {subscribedUsers: req.params.id},
            
        })

        await User.findByIdAndUpdate(req.params.id, {
            $inc:{subscribers: -1},
        })
        res.status(200).json('Sucessfully unsubscribed ')
    } catch (error) {
        next(error)
    }
  }
};

export default userController;
