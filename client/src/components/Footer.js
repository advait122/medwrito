// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p>© {new Date().getFullYear()} MedWrito. All rights reserved.</p>

    </motion.footer>
  );
};

export default Footer;
