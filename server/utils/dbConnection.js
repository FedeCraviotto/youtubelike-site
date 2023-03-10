import mongoose from "mongoose";
import { createError } from "#Utils/customErrors.js";

export const connect = () => {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGODB_CONNECTION_STRING)
      .then(() => {
        console.log("Connected successfully to DB");
      })
      .catch((err) => {
        createError(500, 'Internal Server Error - Failed to connect with Mongo DB');
      });
  };