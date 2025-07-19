// index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import blogRoutes from './routes/blogRoutes.js';
import educationRoutes from './routes/educationRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
import contactRoutes from './routes/contactRoutes.js';
app.use('/api', contactRoutes);
app.use('/api', educationRoutes); 
app.use('/api', blogRoutes); // <--- This line is important!

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log('Server running on http://localhost:5000'));
    console.log("MongoDB connected");
  })
  .catch((err) => console.error("MongoDB connection error:", err));
