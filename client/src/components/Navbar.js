import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ShinyText from '../animations/ShinyText';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

    if (isMobile) return null;


  return (
    <motion.nav
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1 className="logo">
        <ShinyText text="MedWrito" speed={3} />
      </h1>

      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><a className="nav-link" href="/about">About</a></li>

        <li className="dropdown" ref={dropdownRef}>
          <button className="nav-link" onClick={() => setIsDropdownOpen(prev => !prev)}>
            Services <i className="fas fa-caret-down"></i>
          </button>
          <ul className="dropdown-menu" style={{ display: isDropdownOpen ? 'block' : 'none' }}>
            <li><Link to="/ManuscriptWriting">Manuscript Writing</Link></li>
            <li><Link to="/Publication">Publication Support</Link></li>
            <li><Link to="/OtherServices">Other Support</Link></li>
            
          </ul>
        </li>

        <li><a href="/Contact" className="nav-link">Contact</a></li>
        <li><Link to="/blogs" className="nav-link">Blogs</Link></li>
        <li><Link to="/Education" className="nav-link">Education</Link></li>
      </ul>

      <div className="social-icons">
        <div className="social-icons">
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
    href="#"
    target="_blank"
    rel="noreferrer"
  >
    <i className="fab fa-facebook"></i>
  </a>
</div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
