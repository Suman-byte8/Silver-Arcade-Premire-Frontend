import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import OurRooms from './pages/OurRooms';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import OurFacilities from './pages/Facilities';
import OfferPage from './pages/OfferPage';
import ReservationPage from './pages/ReservationPage';
import OurHeartMalda from './pages/HeartMalda';
import Membership from './pages/Membership';

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
          <Route path="/our-facilities" element={<OurFacilities />}/>
          <Route path="/our-offers" element={<OfferPage />}/>
          <Route path="/reservation" element={<ReservationPage />}/>
          <Route path="/heart-malda" element={<OurHeartMalda />}/>
          <Route path="/membership-area" element={<Membership />}/>

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;