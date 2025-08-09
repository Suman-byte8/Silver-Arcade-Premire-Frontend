import SemiNavbar from "./SemiNavbar";
import Booking from "./Booking";
import Slider from "./Slider";
import banner1 from "../../../assets/Home/banner1.jpeg";
import banner2 from "../../../assets/Home/banner2.jpg";
import banner3 from "../../../assets/Home/banner3.jpg";
const Carousel = () => {
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
    <div className="w-full">
      <div className="carousel-container relative w-full h-[90vh] bg-gray-200 flex items-center justify-center overflow-hidden">
        <SemiNavbar />
        <Slider slides={slides} showDetails={true}/>
        <div className="absolute bottom-0 w-full flex justify-center pb-4 z-10">
          <Booking />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
