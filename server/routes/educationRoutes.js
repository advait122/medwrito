import express from 'express';
import Education from '../models/education.js';

const router = express.Router();

router.get('/educations', async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch educations', error: err.message });
  }
});

export default router;
