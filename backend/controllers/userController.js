import { createError } from "../customErrors.js";
import User from "../models/User.js";

const userController = {
  get: async (req, res, next) => {},
  update: async (req, res, next) => {
    if (req.params.id === req.user.id) {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (error) {}
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
  
  suscribe: async (req, res, next) => {},
  unsuscribe: async (req, res, next) => {},
  like: async (req, res, next) => {},
  dislike: async (req, res, next) => {},
};

export default userController;
