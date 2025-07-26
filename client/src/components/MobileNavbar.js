// src/components/MobileNavbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ShinyText from '../animations/ShinyText'; // ✅ Add this

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
    setIsDropdownOpen(false); // close dropdown when closing main menu
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  // Only show on mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="mobile-navbar-wrapper">
      <div className={`mobile-navbar ${isOpen ? 'expanded' : ''}`}>
        <div className="mobile-navbar-header">
          <h1 className="logo">
  <ShinyText text="MedWrito" speed={3} />
</h1>

          <button className="hamburger" onClick={toggleMenu}>
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About</Link></li>
              <li className="mobile-dropdown">
                <button
                  className="dropdown-toggle"
                  onClick={() => setIsDropdownOpen(prev => !prev)}
                >
                  Services <i className="fas fa-caret-down"></i>
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.ul
                      className="dropdown-list"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <li><Link to="/ManuscriptWriting" onClick={closeMenu}>Manuscript Writing</Link></li>
                      <li><Link to="/Publication" onClick={closeMenu}>Publication Support</Link></li>
                      <li><Link to="/OtherServices" onClick={closeMenu}>Other Support</Link></li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li><Link to="/Contact" onClick={closeMenu}>Contact</Link></li>
              <li><Link to="/blogs" onClick={closeMenu}>Blogs</Link></li>
              <li><Link to="/Education" onClick={closeMenu}>Education</Link></li>

              <div className="mobile-social-icons">
                
  <a
    href="https://www.instagram.com/medwrito/?igsh=MTdmYnhhZnEzdXp0NA%3D%3D"
    target="_blank"
    rel="noreferrer"
  >
    <i className="fab fa-instagram"></i>
  </a>

  <a
    href="https://www.linkedin.com/in/medwrito-research-24325a375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target="_blank"
    rel="noreferrer"
  >
    <i className="fab fa-linkedin"></i>
  </a>

 <a
  href="https://wa.me/message/MOEYRF5TXKJLJ1"
  target="_blank"
  rel="noreferrer"
>
  <i className="fab fa-whatsapp"></i>
</a>

              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileNavbar;
