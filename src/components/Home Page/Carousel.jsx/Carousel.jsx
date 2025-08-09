import SemiNavbar from "./SemiNavbar";
import Booking from "./Booking";
import Slider from "./Slider";

const Carousel = () => {
  return (
    <div className="w-full">
      <div className="carousel-container relative w-full h-[90vh] bg-gray-200 flex items-center justify-center overflow-hidden">
        <SemiNavbar />
        <Slider />
        <div className="absolute bottom-0 w-full flex justify-center pb-4 z-10">
          <Booking />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
