import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';


const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToAbout = () => {
  navigate('/about');
  window.scrollTo({ top: 0, behavior: 'smooth' }); // ✅ force scroll to top
};


  return (
    
    <div className="hero-section">
      <motion.div
        className="hero-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2>MedWrito</h2>
          <p className="subhead">
             Acquiring Knowledge Through Research
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToServices}>
              Services
            </button>
            <button className="btn-ghost" onClick={goToAbout}>
              About Us
            </button>
         
          </div>
             <div className="hero-call-box">
  <p className='phno'>Contact us:<strong> +91-7822858036</strong></p>
</div>
          
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
