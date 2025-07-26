import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    comment: '',
  });

  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      setStatusMsg('Thank you! Your response has been recorded.');
      setFormData({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        comment: '',
      });
      setTimeout(() => setStatusMsg(''), 4000);
    } catch (error) {
      setStatusMsg('❌ Failed to submit. Please try again later.');
      setTimeout(() => setStatusMsg(''), 4000);
    }
  };

  return (
    <motion.div
      className="contact-container"
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="contact-banner">
        <h2 className="contact-title">Contact Us</h2>
      </div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3>Mailing Address</h3>
          <p>Medwrito Research PVT. LTD.</p>
          <p>
            Survey no 28 A,<br />
            Opp. Ganesh Park Society,<br />
            Opp. Chintamani Hotel,<br />
            Chaitanya Nagar, Dhankawadi,<br />
            Pune, Maharashtra 411013
          </p>
          <p>Phone: +91-7822858036</p>
          <p>Email: Medwrito@gmail.com</p>

          <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.498999034942!2d73.8567099!3d18.461043000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb148dd4b9df%3A0x86f690033a920c46!2sMedwrito%20Research%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1752861345629!5m2!1sen!2sin"
  width="100%"
  height="250"
  style={{ border: 0, borderRadius: '8px', marginTop: '16px' }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </motion.div>

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3>Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile No"
              required
              value={formData.mobile}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="comment"
              placeholder="Comment"
              rows="4"
              required
              value={formData.comment}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>

          {statusMsg && <p className="form-status-msg">{statusMsg}</p>}
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contact;
