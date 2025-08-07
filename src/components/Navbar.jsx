import React from "react";
import { FaBars } from "react-icons/fa";

// Define the navigation links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Reservation", path: "/reservation" },
  { name: "Our Rooms", path: "/our-rooms" },
  { name: "Our Facilities", path: "/facilities" },
  { name: "Our Wings", path: "/wings" },
  { name: "About Us", path: "/about-us" },
  { name: "Our Heart Malda", path: "/heart-malda" },
];

const Navbar = () => {
  return (
    <nav className="bg-[#5C5E60] h-[40px] flex items-center p-[20px] w-full justify-between">
      {/* menu and logo */}
      <div className="text-white  flex items-center justify-between gap-4">
        <FaBars className="text-xl cursor-pointer" />
        <h3 className="font-semibold">SILVER ARCADE PREMIRE</h3>
      </div>

      {/* navigation links */}
      <div className="">
        <ul className="">
          {navLinks.map((link, index) => (
            <li key={index} className="inline-block mx-2">
              <a href={link.path} className="text-white hover:text-gray-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
