import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import OurRooms from './pages/OurRooms';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';


const App = () => {
  return (
    <Router>
      <div className=''>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-rooms" element={<OurRooms />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;