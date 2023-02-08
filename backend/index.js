import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js';
import videoRoutes from './routes/videoRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

const connect = () => {
  mongoose.set("strictQuery", false);
  // All Fields will be saved, even if they are not specified in the model
  // mongoose.set('strictQuery', true);
  // Only the fields specified in your Schema will be saved
  mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => {
      console.log("Connected successfully to DB");
    })
    .catch((error) => {
      throw error;
    });
};

app.listen(3030, (req, res) => {
  connect();
  console.log(`Server running on port ${process.env.PORT}`);
});

app.use(cookieParser());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/videos',  videoRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);



app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong'
  return res.status(status).json({
    success: false,
    status,
    message
  })
});