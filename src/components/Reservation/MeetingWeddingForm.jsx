import React from "react";
import { FaBuilding, FaCalendarAlt, FaUser, FaInfoCircle, FaBed, FaPhone, FaEnvelope } from "react-icons/fa";

export default function MeetingWeddingForm() {
  return (
    <div className="flex-1 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Destination */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">DESTINATION</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaBuilding className="text-gray-500 mr-2" />
            <span className="text-gray-700">Select City</span>
            <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Hotel/Resort */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">HOTEL/RESORT</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaBuilding className="text-gray-500 mr-2" />
            <span className="text-gray-700">Select Hotel</span>
            <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Nature of Event */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">NATURE OF EVENT</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span className="text-gray-700">Nature of Event</span>
            <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Number of Guests */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">NO OF GUESTS</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaUser className="text-gray-500 mr-2" />
            <span className="text-gray-700">0</span>
            <FaInfoCircle className="text-gray-400 ml-auto" />
          </div>
        </div>

        {/* Event Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">EVENT START DATE</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span className="text-gray-700">10 Aug 2025</span>
          </div>
        </div>

        {/* Event End Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">EVENT END DATE</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span className="text-gray-700">10 Aug 2025</span>
          </div>
        </div>

        {/* Number of Rooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">NUMBER OF ROOMS</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaBed className="text-gray-500 mr-2" />
            <span className="text-gray-700">0</span>
            <FaInfoCircle className="text-gray-400 ml-auto" />
          </div>
        </div>

        {/* Additional Details */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">PLEASE SHARE ADDITIONAL DETAILS</label>
          <div className="flex items-start border border-gray-300 rounded-lg px-3 py-3">
            <svg className="text-gray-500 mr-2 mt-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <textarea
              placeholder="Please share additional details"
              className="flex-1 outline-none resize-none bg-transparent"
              rows={4}
            />
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter Name"
              className="flex-1 outline-none bg-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaPhone className="text-gray-500 mr-2" />
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="flex-1 outline-none bg-transparent"
            />
            <FaInfoCircle className="text-gray-400 ml-2" />
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Event Requires Rooms */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">DOES YOUR EVENT REQUIRE ROOMS?</label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="requiresRooms" className="w-4 h-4" />
              <span className="text-gray-700">YES</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="requiresRooms" className="w-4 h-4" />
              <span className="text-gray-700">NO</span>
            </label>
          </div>
        </div>

        {/* reCAPTCHA */}
        <div className="col-span-1 md:col-span-2 flex items-center gap-2 mb-6">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-sm text-gray-700">I'm not a robot</span>
          <div className="ml-4 flex items-center gap-2">
            <div className="text-xs">
              <div className="flex gap-2">
                <a href="#" className="text-blue-600">Privacy</a>
                <span>-</span>
                <a href="#" className="text-blue-600">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  