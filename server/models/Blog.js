// models/Blog.js
import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
}, { timestamps: true });

export default mongoose.model('Blog', blogSchema);
