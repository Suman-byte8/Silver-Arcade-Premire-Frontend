import React from "react";
import Navbar from "../components/Navbar";

import Carousel from "../components/Home Page/Carousel/Carousel";
import Distinctive from "../components/Home Page/Distinctive/Distinctive";

import Offers from "../components/Home Page/Curated Offers/Offers";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Distinctive/>
      <Offers/>
    </div>
  );
};

export default Home;
