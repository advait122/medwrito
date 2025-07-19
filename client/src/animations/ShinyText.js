// src/components/ShinyText.js

import React from 'react';
import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 2, className = '' }) => {
  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ '--shine-speed': `${speed}s` }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
