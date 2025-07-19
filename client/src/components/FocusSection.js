// src/components/FocusSection.js

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import image from '../images/climb.jpg';


const FocusSection = () => {
  return (
    <motion.section
      className="focus-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      
      transition={{ duration: 0.6 }}
    >
      <div className="focus-wrapper">
        <div className="focus-content">
          <div className="focus-image">
            <img src={image} alt="Focus Visual" />
          </div>
          <div className="focus-text">
            <p className="subheading">We always focus on</p>
            <h2>Accuracy, Research Ethics, and Real Impact</h2>
            <p className="description">
              Our team delivers research support grounded in integrity and precision. From planning to publication, we work to amplify your ideas with clarity and credibility.
            </p>
            <Link to="/servicematerial" className="btn-primary">
  Explore services
</Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FocusSection;
