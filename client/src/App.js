import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blogs from './pages/blogs';
import About from './components/About'; // <- NEW
import Contact from './pages/Contact';
import Education from './pages/Education';
import OtherServices from './pages/OtherServices';
import ManuscriptWriting from './pages/ManuscriptWriting';
import Publication from './pages/Publication';
import Service from './pages/servicematerial';
import MobileNavbar from './components/MobileNavbar';


function App() {
  return (
    <Router>
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
         <Route path="/education" element={<Education />} /> 
         <Route path="/ManuscriptWriting" element={<ManuscriptWriting />} />
         <Route path="/Publication" element={<Publication />} />
         <Route path="/servicematerial" element={<Service />} />
         
<Route path="/OtherServices" element={<OtherServices />} />

      </Routes>
    </Router>
  );
}

export default App;
