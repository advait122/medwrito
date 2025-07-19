// src/components/WhyUsSection.js
import React from 'react';
import { motion } from 'framer-motion';

const WhyUsSection = () => {
  return (
    <div className="why-us-section">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why Choose Us?
      </motion.h2>
      <motion.p
        className="why-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        With over 50+ clients across the globe, we are trusted for delivering scalable, reliable, and beautiful writings.
      </motion.p>
    </div>
  );
};

export default WhyUsSection;
