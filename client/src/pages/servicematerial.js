import React from 'react';
import { motion } from 'framer-motion';
import './servicematerial.css';

const servicematerial = () => {
  return (
    <div className="educational-material-container">
      <div className="educational-material-banner">
        <h1 className="educational-material-title">Our Services</h1>
      </div>

      <motion.div
        className="educational-material-box"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className="intro-text">
          At MedWrito, we believe that knowledge is the foundation of better healthcare decisions. Our Educational Material section is dedicated to providing high-quality, accurate, and easy-to-understand resources tailored for diverse audiences—including patients, caregivers, healthcare professionals, students, and life sciences organizations.
        </p>
        <p className="intro-text">
          Whether you’re looking to educate, engage, or empower, our content is designed to bridge the gap between medical science and public understanding.
        </p>

        <h3 className="section-heading">What You’ll Find Here</h3>
        <ul className="styled-bullets">
          <li><strong>Patient Education Materials:</strong> Clear, concise content to help patients understand their conditions and treatments. From chronic disease guides to post-discharge instructions—designed to simplify medical complexity.</li>
          <li><strong>Medical Blogs & Articles:</strong> Evidence-based blogs covering health trends, research updates, and best practices—ideal for professionals and students.</li>
          <li><strong>Training Modules & Learning Aids:</strong> E-learning modules, PowerPoints, and quick-reference guides for workshops, CME programs, or internal staff training.</li>
          <li><strong>White Papers & Explainers:</strong> In-depth explainers clarifying complex healthcare and pharmaceutical topics for stakeholders.</li>
        </ul>

        <h3 className="section-heading">Who Is It For?</h3>
        <ul className="styled-bullets">
          <li>Healthcare Professionals – looking for ready-to-use educational tools</li>
          <li>Medical & Pharma Companies – seeking accurate branded content</li>
          <li>Academic Institutions – requiring structured workshop material</li>
          <li>Patients & Public – wanting trustworthy, jargon-free health content</li>
        </ul>

        <h3 className="section-heading">Quality You Can Trust</h3>
        <p className="intro-text">
          All content is created by expert medical writers and reviewed by subject matter experts. We adhere to health literacy standards and tailor information to meet cultural and regional needs.
        </p>

        <h3 className="section-heading">Let’s Educate Together</h3>
        <p className="closing-note">
          Have a topic in mind? Need custom educational content for your organization? Let’s collaborate and build material that informs, empowers, and inspires.
        </p>
      </motion.div>
    </div>
  );
};

export default servicematerial;
