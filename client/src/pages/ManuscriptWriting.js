import React from 'react';
import './ManuscriptWriting.css';
import { motion } from 'framer-motion';

const ManuscriptWriting = () => {
  return (
    <motion.div
      className="manuscript-writing-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="manuscript-writing-banner">
        <h2 className="manuscript-writing-title"> Writing Services</h2>
      </div>

  
        <div className="manuscript-writing-box">
  <p className="intro-text">
    Publishing in peer-reviewed journals is a critical step for researchers, academics, and clinicians. At <strong>MedWrito Research</strong>, we offer end-to-end Manuscript Writing Support to turn your data into polished, publication-ready manuscripts.
  </p>

  <p className="section-heading">What We Help You Write</p>
  <ul className="styled-bullets">
    <li><strong>Original Research Articles</strong> – Structured and journal-ready formats for presenting study objectives, results, and implications.</li>
    <li><strong>Review Articles & Systematic Reviews</strong> – Comprehensive literature synthesis with evidence-based insights.</li>
    <li><strong>Case Reports & Case Series</strong> – Well-documented cases following ICMJE & CARE guidelines.</li>
    <li><strong>Short Communications & Brief Reports</strong> – Concise, high-impact manuscripts for rapid publication.</li>
    <li><strong>Letters to the Editor</strong> – Formal yet crisp responses or commentaries.</li>
  </ul>

  <p className="section-heading">Our Manuscript Writing Process</p>
  <ul className="styled-bullets">
    <li><strong>Initial Consultation</strong> – Understand your goals, target journal, and available data.</li>
    <li><strong>Content Development</strong> – We build your manuscript section-by-section per guidelines.</li>
    <li><strong>Scientific Writing & Referencing</strong> – Accurate structure and referencing (Vancouver, APA, etc.).</li>
    <li><strong>Draft Review & Author Feedback</strong> – Collaborative revisions to match your voice.</li>
    <li><strong>Final Delivery</strong> – Submission-ready document + plagiarism check (if needed).</li>
  </ul>

  <p className="section-heading">Features of Our Support</p>
  <ul className="styled-bullets">
    <li>Structured Abstracts and IMRaD Format</li>
    <li>Detailed Literature Review & Citation Support</li>
    <li>Tables, Graphs & Data Visualization</li>
    <li>Journal-Specific Formatting & Compliance</li>
    <li>Professional, Clear & Concise Language</li>
    <li>Revision Support Based on Feedback</li>
    <li>Ethical and Confidential Practices</li>
  </ul>

  <p className="section-heading">Who Can Benefit</p>
  <ul className="styled-bullets">
    <li>Postgraduate & PhD Scholars</li>
    <li>Faculty, Researchers & Clinicians</li>
    <li>Surgeons, Nurses & Allied Health Professionals</li>
    <li>Pharma & CRO Professionals</li>
  </ul>

  <p className="closing-note">
    <strong>Publish with confidence</strong> — Let MedWrito craft high-quality manuscripts that elevate your research and meet global publishing standards.
  </p>
</div>
    </motion.div>
  );
};

export default ManuscriptWriting;
