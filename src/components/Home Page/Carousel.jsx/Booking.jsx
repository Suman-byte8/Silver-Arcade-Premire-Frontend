import React from "react";
import { FaBed, FaCalendarAlt, FaSearch } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

const Booking = () => {
  return (
    <div className="w-full max-w-4xl">
      <div className="w-full bg-white shadow-md flex items-center justify-between p-3 rounded-lg">
        <div className="_search flex items-center">
          <FaSearch className=" mr-2" />
          <span className="outline-none ">
            City, Hotel, Airport code
          </span>
        </div>
        <div className="_date flex items-center">
          <FaCalendarAlt className=" mr-2" />
          <span className="outline-none ">
            Check-in - Check-out
          </span>
        </div>
        <div className="_room flex items-center">
          <FaBed className=" mr-2" />
          <span className="outline-none ">1 Room</span>
        </div>
        <div className="_People flex items-center">
          <IoPeopleSharp className=" mr-2" />
          <span className="outline-none ">
            2 Adults, 0 Children
          </span>
        </div>
        <div className="_bookingButton">
          <button className="bg-[#5c5e60] text-white rounded-lg px-4">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
