import React from "react";
import { FaBuilding, FaUtensils, FaUser, FaInfoCircle, FaCalendarAlt, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";

export default function RestaurantForm() {
  return (
    <div className="flex-1 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Selection Fields */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SELECT CITY</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaBuilding className="text-gray-500 mr-2" />
            <span className="text-gray-700">Select City</span>
            <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SELECT HOTEL/RESORT</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaBuilding className="text-gray-500 mr-2" />
            <span className="text-gray-700">Select Hotel/Resort</span>
            <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SELECT RESTAURANT</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaUtensils className="text-gray-500 mr-2" />
            <span className="text-gray-700">Select Restaurant</span>
            <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">NUMBER OF DINERS</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaUser className="text-gray-500 mr-2" />
            <span className="text-gray-700">0</span>
            <FaInfoCircle className="text-gray-400 ml-auto" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">DATE</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span className="text-gray-700">10 Aug 2025</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">TIME SLOT</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaClock className="text-gray-500 mr-2" />
            <span className="text-gray-700">Select Meal Period</span>
            <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <p className="text-xs text-gray-500 mt-1">(ALL OUTLETS MAY NOT BE OPERATIONAL ACROSS ALL TIME SLOTS)</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SPECIAL REQUESTS</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaUtensils className="text-gray-500 mr-2" />
            <span className="text-gray-700">Special Requests</span>
            <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">PLEASE SHARE ADDITIONAL DETAILS</label>
          <div className="flex items-start border border-gray-300 rounded-lg px-3 py-3">
            <svg className="text-gray-500 mr-2 mt-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <textarea
              placeholder="Please share additional details"
              className="flex-1 outline-none resize-none bg-transparent"
              rows={3}
            />
          </div>
        </div>

        {/* Guest Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Guest Name</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter guest name"
              className="flex-1 outline-none bg-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Guest Phone Number</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaPhone className="text-gray-500 mr-2" />
            <input
              type="tel"
              placeholder="Enter phone number"
              className="flex-1 outline-none bg-transparent"
            />
            <FaInfoCircle className="text-gray-400 ml-2" />
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Guest Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Security and Consent */}
        <div className="col-span-1 md:col-span-2 flex items-center gap-2 mb-4">
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

        <div className="col-span-1 md:col-span-2 flex items-start gap-2 mb-6">
          <input type="checkbox" className="w-4 h-4 mt-1" />
          <span className="text-sm text-gray-700">
            By submitting request, I agree to & accept the <a href="#" className="text-blue-600">TnC</a> of the website & grant consent for using this information for product & promotional offers.
          </span>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg text-lg font-medium">
            PLACE TABLE RESERVATION REQUEST
          </button>
        </div>
      </div>
    </div>
  );
} 