import React from 'react';

import HeroSection from '../components/HeroSection';
//import InfoCards from '../components/InfoCards';
import WhyUsSection from '../components/WhyUsSection';
import Footer from '../components/Footer';
import './Home.css';
import ServicesSection from '../components/ServicesSection';
import FocusSection from '../components/FocusSection';
import TargetApproach from '../components/TargetApproach';

const Home = () => {
  return (
    <div className="home">
      
      <HeroSection />
      <section id="services">
  <ServicesSection />
</section>

      <FocusSection />
      <TargetApproach />
      
      <WhyUsSection />
      
      <Footer />
      
    </div>
  );
};

export default Home;





