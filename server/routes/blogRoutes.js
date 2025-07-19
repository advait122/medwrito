// routes/blogRoutes.js
import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch blogs', error });
  }
});

export default router;
