import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import Footer from '../components/Footer';

const AboutSection = () => {
  const steps = [
    {
      title: 'Medical & Scientific Writing',
      content:
        'Preparation of research papers, clinical study reports, regulatory documents, and scientific publications. Development of medical manuscripts, case studies, and systematic reviews for journals and conferences.',
    },
    {
      title: 'Regulatory & Compliance Documentation',
      content:
        'Writing and reviewing regulatory submissions for pharmaceutical, biotechnology, and medical device companies. Creation of Clinical Study Protocols, Investigator Brochures, and Common Technical Documents (CTDs).',
    },
    {
      title: 'Healthcare & Pharmaceutical Content Development',
      content:
        'Writing patient education materials, medical blogs, articles, and white papers. Development of medical marketing content for healthcare brands, pharmaceuticals, and wellness companies.',
    },
    {
      title: 'Medical Editing & Proofreading Services',
      content:
        'Ensuring accuracy, clarity, and compliance with medical and scientific guidelines. Formatting and reviewing documents for journals, research institutions, and corporate clients.',
    },
    {
      title: 'Training & Consultancy Services',
      content:
        'Providing training programs and workshops on medical writing and regulatory affairs. Consulting for healthcare organizations on medical content strategy and documentation compliance.',
    },
  ];

  return (
    <>
      <div className="about-container">
        <div className="about-banner">
          <h1 className="about-title">MedWrito</h1>
          
        </div>

        <motion.div
          className="about-box"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
        

          <h3 className="section-heading">Our Core Services</h3>
          <ul className="styled-bullets">
            {steps.map((step, index) => (
              <li key={index}>
                <strong>{step.title}:</strong> {step.content}
              </li>
            ))}
          </ul>

          <p className="closing-note">
            At MedWrito, we combine scientific expertise with editorial precision. Whether it's drafting a regulatory
            submission or simplifying complex data for patients, our team ensures that your message is accurate,
            compliant, and impactful.
          </p>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default AboutSection;
