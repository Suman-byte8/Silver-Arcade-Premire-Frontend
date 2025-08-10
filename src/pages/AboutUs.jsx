import React from "react";
import Amenities from "../components/About Us/Amenities";
import Service from "../components/About Us/Service";
import IntroText from "../components/About Us/IntroText";
import Gallery from "../components/About Us/Gallery";

const AboutUs = () => {

  return (
    <div className="bg-white min-h-screen flex flex-col px-12">
      {/* Hero Section */}
      <div className="relative p-3">
        <img
          src="https://www.silverarcadepremier.com/images/about.jpeg"
          alt="About Us"
          className="w-full h-[400px] object-cover rounded-lg"
        />
        <h1 className="absolute bottom-8 left-8 text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
          About Us
        </h1>
      </div>

      {/* Intro Text */}
      <IntroText/>

      {/* Amenities */}
<Amenities/>
{/* Services */}
<Service/>
      {/* Gallery */}
<Gallery/>
    </div>
  );
};

export default AboutUs;
