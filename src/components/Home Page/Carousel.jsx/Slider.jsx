import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Details from "./Details";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import banner1 from "../../../assets/Home/banner1.jpeg";
import banner2 from "../../../assets/Home/banner2.jpg";
import banner3 from "../../../assets/Home/banner3.jpg";

const Slider = () => {
  const slides = [
    {
      image: banner1,
      details: {
        title: "World's 9th LEED Zero Water Certified Hotel",
        description:
          "ITC Grand Bharat is 9th globally to be awarded the LEED Zero certification award",
      },
    },
    {
      image:banner2,
      details: {
        title: "Luxury Redefined",
        description:
          "Experience unparalleled luxury and comfort at our exquisite hotels.",
      },
    },
    {
      image:banner3,
      details: {
        title: "Unforgettable Moments",
        description:
          "Create lasting memories with our world-class amenities and services.",
      },
    },
  ];

  return (
    <div className="w-full h-full relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-start left-20">
                <Details
                  title={slide.details.title}
                  description={slide.details.description}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-prev absolute left-4 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full cursor-pointer">
        <FaChevronLeft className="text-gray-700" />
      </div>
      <div className="custom-next absolute right-4 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full cursor-pointer">
        <FaChevronRight className="text-gray-700" />
      </div>
    </div>
  );
};

export default Slider;
