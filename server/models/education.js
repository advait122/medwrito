import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String
}, { timestamps: true });

const Education = mongoose.model('Education', educationSchema);

export default Education;
