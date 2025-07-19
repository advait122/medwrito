import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TargetApproachSection.css';

import one from '../images/1.png';
import two from '../images/2.png';
import three from '../images/3.png';
import four from '../images/4.png';


const detailData = {
  consulting: {
    title: 'Project Consulting: Insight-Driven Collaboration',
    points: [
      'Strategic input on document planning',
      'Advice on regulatory/clinical writing best practices',
      'Guidance on publication pathways and journal targeting',
    ],
    desc: 'Our engagement begins with understanding your vision, challenges, timelines, and regulatory or academic context. We offer expert consulting to help shape your idea into a structured, achievable project roadmap.'
  },
  goals: {
    title: 'Goal Definition: Aligning with What Matters',
    points: [
      'Defining key objectives and outcomes',
      'Identifying target audience and stakeholders',
      'Aligning with scientific, regulatory, or marketing intent',
    ],
    desc: 'Before we write a single word, we work closely with you to define clear, measurable goals. We ensure every document aligns with the intended purpose.'
  },
  planning: {
    title: 'Planning & Execution: Structured for Success',
    points: [
      'Tailored writing plans and content outlines',
      'Dedicated project timelines and checkpoints',
      'Transparent collaboration using modern tools',
    ],
    desc: 'From timelines to templates, we create a customized execution plan that suits your workflow and deadlines. Our team integrates seamlessly with yours.'
  },
  measure: {
    title: 'Measurement & Review: Tracking Impact and Quality',
    points: [
      'Content effectiveness reviews',
      'Client feedback loops and revisions',
      'Post-submission/journal tracking support',
    ],
    desc: 'We provide post-project evaluation to ensure the content delivered meets predefined metrics like readability, regulatory compliance, and scientific accuracy.'
  },
};

const TargetApproachSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (key) => {
    setActiveCard(activeCard === key ? null : key);
  };

  return (
    <motion.section
      className="target-approach-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="target-overlay">
        <div className="target-header">
          <h2>Customized And Targeted Approach</h2>
        </div>

        <div className="target-cards">
          {[
  { key: 'consulting', title: 'Project Consulting', img: one, desc: 'Understanding client needs, Providing solutions.' },
  { key: 'goals', title: 'Goals', img: two, desc: 'Clarify, Relevance, Realistic goals tailored to your scope.' },
  { key: 'planning', title: 'Planning', img: three, desc: 'Roadmap, strategies, and allocation across all phases.' },
  { key: 'measure', title: 'Measure', img: four, desc: 'Track your journey with actionable steps and metrics.' },
]
.map((card) => (
            <div key={card.key} className="target-card">
              <h4>{card.title}</h4>
              <img src={card.img} alt={card.title} />
              <p>{card.desc}</p>
              <button
                className="btn-primary card-btn"
                onClick={() => handleCardClick(card.key)}
              >
                {activeCard === card.key ? 'Close' : 'Know More'}
              </button>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {activeCard && (
            <motion.div
              className="target-popup-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveCard(null)}
            >
              <motion.div
                className="target-popup"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h5>{detailData[activeCard].title}</h5>
                <p>{detailData[activeCard].desc}</p>
                <ul>
                  {detailData[activeCard].points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <button className="btn-primary close-btn" onClick={() => setActiveCard(null)}>Close</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <img
        src="https://cdn.pixabay.com/photo/2017/03/05/00/34/panorama-2117310_1280.jpg"
        alt="Target Background"
        className="target-bg"
      />
    </motion.section>
  );
};

export default TargetApproachSection;
