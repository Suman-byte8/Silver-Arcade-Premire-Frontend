import React from "react";
import Navbar from "../components/Navbar";

import Carousel from "../components/Home Page/Carousel/Carousel";
import Distinctive from "../components/Home Page/Distinctive/Distinctive";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Carousel />
      <Distinctive/>
    </div>
  );
};

export default Home;
