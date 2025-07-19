// src/pages/Blogs.js
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './blog.css'; // external CSS file
import Footer from '../components/Footer';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // ✅ added loading state
  const sectionRefs = useRef([]);

  useEffect(() => {
    axios.get('https://medwrito.onrender.com/api/blogs')
      .then(response => {
        console.log('Fetched blogs:', response.data);
        const sortedBlogs = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBlogs(sortedBlogs);

        setLoading(false); // ✅ done loading
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
        setError('Something went wrong while fetching blogs.');
        setLoading(false); // ✅ also stop loading on error
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    sectionRefs.current.forEach(el => el && observer.observe(el));

    return () => {
      sectionRefs.current.forEach(el => el && observer.unobserve(el));
    };
  }, [blogs]);

  return (
    <>
      <div className="blogs-container">
        <div className="blogs-banner">
          <h2 className="blogs-heading shiny-text">Our Latest Blogs</h2>
        </div>

        {error && <p className="blogs-error">{error}</p>}

        {loading ? (
          <div className="blog-loading-placeholder">Loading blogs...</div>
        ) : blogs.length === 0 ? (
          <p className="blogs-empty">No blogs to display yet!</p>
        ) : (
          <div className="blog-list">
            {blogs.map((blog, index) => (
              <div
                key={blog._id}
                className="blog-card fade-in-section"
                ref={(el) => (sectionRefs.current[index] = el)}
              >
                <div className="blog-card-content">
                  <h3>{blog.title}</h3>
                </div>
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="blog-image"
                />
                <div className="blog-card-content">
                  <div>
                    {blog.description.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
