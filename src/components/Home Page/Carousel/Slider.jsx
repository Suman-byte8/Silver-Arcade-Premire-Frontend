import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Details from "./Details";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Slider = ({slides,showDetails, classes}) => {


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
                className={`w-full h-full object-cover ${classes}`}
              />
              {
                showDetails?
                <div className="absolute inset-0 flex items-center justify-start left-20">
                <Details
                  title={slide.details.title}
                  description={slide.details.description}
                />
              </div>:
              <></>                
              }
             
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
