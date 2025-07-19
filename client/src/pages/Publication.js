// src/pages/PublicationSupport.js

import React from 'react';
import './Publication.css';
import { motion } from 'framer-motion';

const PublicationSupport = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Banner */}
      <div className="publication-support-banner">
        <h2 className="publication-support-title">Publication Support</h2>
      </div>

      {/* Floating Card */}
      <div className="publication-support-container">
        <p className="intro-text">
          At MedWrito Research, we understand that getting your research published in a reputed journal is both an art and a science. Our end-to-end publication support services are designed to help researchers, students, clinicians, and academic institutions successfully navigate the complex and competitive world of scientific publishing.
        </p>

        <p className="intro-text">
          Whether you're submitting to a Scopus-indexed journal or a high-impact international publication, our team is here to ensure your manuscript is not just written—but publish-ready.
        </p>

        <h3 className="section-heading">What We Offer</h3>

        <h4 className="section-heading">1. Journal Selection Assistance</h4>
        <ul className="styled-bullets">
          <li>Match research topic with appropriate journals</li>
          <li>Analyze impact factor, scope, and acceptance criteria</li>
          <li>Avoid predatory or low-credibility publications</li>
        </ul>

        <h4 className="section-heading">2. Manuscript Preparation & Formatting</h4>
        <ul className="styled-bullets">
          <li>Formatting as per journal style (Vancouver, APA, etc.)</li>
          <li>Structuring abstract, keywords, references, and tables</li>
          <li>In-text citations, figures, legends, and supplementary files</li>
        </ul>

        <h4 className="section-heading">3. Language Editing & Scientific Proofreading</h4>
        <ul className="styled-bullets">
          <li>Native-level English editing</li>
          <li>Clarity, flow, and grammar correction</li>
          <li>Scientific terminology validation</li>
          <li>Plagiarism checks and reduction (as required)</li>
        </ul>

        <h4 className="section-heading">4. Cover Letter & Submission Preparation</h4>
        <ul className="styled-bullets">
          <li>Customized cover letters</li>
          <li>Conflict of interest, authorship, and ethical statements</li>
          <li>Submission file naming and structure</li>
          <li>Online portal guidance (if required)</li>
        </ul>

        <h4 className="section-heading">5. Post-Submission Support</h4>
        <ul className="styled-bullets">
          <li>Responding to reviewer comments</li>
          <li>Revising manuscript accordingly</li>
          <li>Re-submission support if initial submission is rejected</li>
          <li>Journal communication assistance (if needed)</li>
        </ul>

        <h3 className="section-heading">Why Choose MedWrito Research?</h3>
        <ul className="styled-bullets">
          <li>Experienced Medical Writers & Editors</li>
          <li>Personalized Journal Matching</li>
          <li>High-Quality Scientific Writing & Editing</li>
          <li>Ethical & Confidential Process</li>
          <li>Increased Chances of Acceptance</li>
        </ul>

        <h3 className="section-heading">Who Can Benefit?</h3>
        <ul className="styled-bullets">
          <li>Postgraduate & PhD Students</li>
          <li>Medical and Allied Health Researchers</li>
          <li>Clinicians Seeking to Publish Case Reports</li>
          <li>Pharma Industry Professionals</li>
          <li>Academic Institutions & Hospitals</li>
        </ul>

        <p className="closing-note">
          Publishing your research is the final—and most rewarding—step in your academic journey. Let MedWrito Research help you make that leap with confidence, quality, and precision.
        </p>
      </div>
    </motion.div>
  );
};

export default PublicationSupport;
