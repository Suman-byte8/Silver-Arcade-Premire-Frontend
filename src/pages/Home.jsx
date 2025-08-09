import React from "react";
import Navbar from "../components/Navbar";

import Carousel from "../components/Home Page/Carousel/Carousel";
import Distinctive from "../components/Home Page/Distinctive/Distinctive";

import Offers from "../components/Home Page/Curated Offers/Offers";
import BeAMember from "../components/Home Page/Membership/BeAMember";
import Contact from "../components/Home Page/Contact Us/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Distinctive/>
      <Offers/>
      <BeAMember/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
