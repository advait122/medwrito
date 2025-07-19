import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const [educations, setEducations] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/educations'); // Replace with your server IP
        setEducations(res.data);
      } catch (err) {
        setError('Failed to fetch education content');
      }
    };
    fetchEducations();
  }, []);

  return (
    <motion.div
      className="education-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
       <div className="education-banner">
    <h2 className="education-title">Educational Resources</h2>
   
  </div>
      {error && <p>{error}</p>}
      {educations.length === 0 && <p>No education materials available.</p>}

      <div className="education-grid">
        {educations.map((edu, index) => (
          <motion.div
            className="education-card"
            key={edu._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={edu.imageUrl} alt={edu.title} />
            <h3>{edu.title}</h3>
            <p>{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
