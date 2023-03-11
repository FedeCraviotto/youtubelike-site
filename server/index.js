import express from "express";
import dotenv from "dotenv";
import userRoutes from '#Routes/userRoutes.js'
import videoRoutes from '#Routes/videoRoutes.js';
import commentRoutes from '#Routes/commentRoutes.js';
import authRoutes from '#Routes/authRoutes.js';
import cookieParser from "cookie-parser";
import cors from 'cors';
import { connect } from "#Utils/dbConnection.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;

app.listen(3030, (req, res) => {
  connect();
  console.log(`Server running on port ${PORT}`);
});


app.use(cors({
  origin: 'http://localhost:4000',
  credentials: true
}));

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