import React from "react";
import { FaXTwitter, FaTwitter, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa6";
import logo from "/logo.png";
import FullLogo from "./FullLogo";

const Footer = () => {
  return (
    <footer className="bg-white mt-12">
      {/* Social Handles */}
      

      {/* Bottom Row */}
      <div className="border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FullLogo isFlex={true}/>
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms Of Service</a>
          </div>

          {/* Copyright */}
          <div className="mt-2 md:mt-0 text-xs text-gray-500">
            ©2025 Silver Arcade Premiere All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
