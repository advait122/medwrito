import React from 'react';
import './OtherServices.css';
import { motion } from 'framer-motion';

const OtherServices = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Banner */}
      <div className="other-services-banner">
        <h2 className="other-services-title">Other Services</h2>
      </div>

      {/* Floating Card */}
      <div className="other-services-container">
        <p className="intro-text">
          At <strong>MedWrito Research</strong>, we offer more than just writing—we provide the technical backbone that supports high-quality, publishable research. From organizing raw data to delivering publication-ready manuscripts, our specialized support services help ensure your work is accurate, reliable, and professionally presented.
        </p>

        <p className="section-heading">1. Data Entry & Cleaning</p>
        <ul className="styled-bullets">
          <li>Entry of research data from case sheets, questionnaires, CRFs, Excel/Google forms</li>
          <li>Cleaning and coding of raw datasets</li>
          <li>Error checking and data consistency validation</li>
          <li>Creation of structured data tables ready for analysis</li>
          <li>Secure and confidential data handling with quality control</li>
        </ul>

        <p className="section-heading">2. Statistical Analysis</p>
        <ul className="styled-bullets">
          <li>Descriptive and inferential statistics</li>
          <li>Hypothesis testing (t-test, Chi-square, ANOVA, etc.)</li>
          <li>Regression analysis, correlation, and multivariate techniques</li>
          <li>Use of SPSS, R, STATA, GraphPad, and Excel</li>
          <li>Graphs, tables, and visual representation of data</li>
          <li>Interpretation of results in clear, research-friendly language</li>
        </ul>

        <p className="section-heading">3. Editing & Proofreading</p>
        <ul className="styled-bullets">
          <li>Grammar and language correction</li>
          <li>Scientific flow and logical structuring</li>
          <li>Reference consistency and accuracy</li>
          <li>Fact-checking and terminology validation</li>
          <li>Proofreading for clarity, punctuation, and tone</li>
          <li>Plagiarism reduction as needed</li>
        </ul>

        <p className="section-heading">4. Formatting Services</p>
        <ul className="styled-bullets">
          <li>Page layout and design (fonts, margins, headings)</li>
          <li>Reference styling (Vancouver, APA, Harvard, etc.)</li>
          <li>Table and figure formatting</li>
          <li>Alignment with university or journal templates</li>
          <li>Table of contents, pagination, headers/footers setup</li>
        </ul>

        <p className="section-heading">Ideal for</p>
        <ul className="styled-bullets">
          <li>Medical, Nursing, and Allied Health PG Students</li>
          <li>Research Scholars and PhD Candidates</li>
          <li>Faculty Preparing for Journal Submission</li>
          <li>Hospital-Based Clinicians and Investigators</li>
          <li>Academic Institutions and CROs</li>
        </ul>

        <p className="closing-note">
          <strong>Empower your research with expert support.</strong> Let MedWrito Research handle the technical details, so you can focus on your ideas.
        </p>
      </div>
    </motion.div>
  );
};

export default OtherServices;
