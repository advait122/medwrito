// src/components/Services.js

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';



import publicationimg from '../images/pexels-fauxels-3183197.jpg';
import writingimg from '../images/this.jpg';
import  clinicalSupportImg from '../images/360_F_97371857_r8Tw2Y7BSsXf4N2hAbyAcDoDm9nDkXpR.jpg';


const Services = () => {

 const navigate = useNavigate();

const handleNavigate = (path) => {
  navigate(path); // Navigate first
};



  return (
   <motion.section
  className="services-section"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: false, amount: 0.01 }} // 👈 THIS LINE MAKES IT REPEAT
>

      
      <p className="subheading">Our Services</p>
      <h2>Discover the full potential of your research with our end-to-end, expert-driven support services tailored for impactful results.</h2>
    <div className="services-wrapper">
      
  <div className="services-cards">
      <div className="services-cards">
        {/* Card 1 */}
        <div className="service-card">
          <img src={writingimg} alt="Manuscript Writing" />
          <h3>Manuscript Writing</h3>
          <p>
            Research Articles,
            Case Reports,
            Narrative Reviews and
            Consensus.
          </p>
          <div className="service-buttons">
            <button className="btn-primary" onClick={() => handleNavigate('/ManuscriptWriting')}>Know More</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="service-card">
          <img src={publicationimg} alt="Publication Support" />
          <h3>Publication Support</h3>
          <p>
            Journal Selection,
            Submission,
            Reply to Comments and
            Rejection Handling
          </p>
          <div className="service-buttons">
            <button className="btn-primary" onClick={() => handleNavigate('/Publication')}>Know More</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="service-card">
          <img src={clinicalSupportImg} alt="Other Support" />
          <h3>Other Support</h3>
          <p>
            RWE Studies,
            Data Collection,
            Study Documents and
            Analysis
          </p>
          
          <div className="service-buttons">
            <button className="btn-primary" onClick={() => handleNavigate('/OtherServices')}>Know More</button>
          </div>
        </div>
      </div>
    </div>
</div>

    </motion.section>
  );
};

export default Services;
