import React, { useState } from "react";
import { FaSearch, FaCrosshairs, FaCalendarAlt, FaBed, FaUser, FaInfoCircle, FaTag, FaChevronDown, FaChevronUp, FaPlus, FaMinus } from "react-icons/fa";

export default function AccommodationForm() {
  const [showArrivalCalendar, setShowArrivalCalendar] = useState(false);
  const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
  const [showRoomSelection, setShowRoomSelection] = useState(false);
  
  // Get current date and next day
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  
  const [arrivalDate, setArrivalDate] = useState(today);
  const [departureDate, setDepartureDate] = useState(tomorrow);
  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const handleDateSelect = (date, type) => {
    if (type === 'arrival') {
      setArrivalDate(date);
      setShowArrivalCalendar(false);
      // Ensure departure is after arrival
      if (date >= departureDate) {
        const newDeparture = new Date(date);
        newDeparture.setDate(date.getDate() + 1);
        setDepartureDate(newDeparture);
      }
    } else {
      if (date > arrivalDate) {
        setDepartureDate(date);
        setShowDepartureCalendar(false);
      }
    }
  };

  const addRoom = () => {
    setRooms([...rooms, { adults: 1, children: 0 }]);
  };

  const removeRoom = (index) => {
    if (rooms.length > 1) {
      const updatedRooms = rooms.filter((_, i) => i !== index);
      setRooms(updatedRooms);
    }
  };

  const updateCount = (roomIndex, type, delta) => {
    const updatedRooms = [...rooms];
    const newValue = Math.max(0, updatedRooms[roomIndex][type] + delta);
    updatedRooms[roomIndex][type] = newValue;
    setRooms(updatedRooms);
  };

  const getTotalAdults = () => rooms.reduce((sum, room) => sum + room.adults, 0);
  const getTotalChildren = () => rooms.reduce((sum, room) => sum + room.children, 0);

  const generateCalendarDays = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const Calendar = ({ selectedDate, onDateSelect, minDate, maxDate }) => {
    const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
    const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());
    
    const days = generateCalendarDays(currentYear, currentMonth);
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const isDateDisabled = (date) => {
      if (minDate && date < minDate) return true;
      if (maxDate && date > maxDate) return true;
      return false;
    };

    const isDateSelected = (date) => {
      return date && date.toDateString() === selectedDate.toDateString();
    };

    return (
      <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 w-80">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => {
                if (currentMonth === 0) {
                  setCurrentMonth(11);
                  setCurrentYear(currentYear - 1);
                } else {
                  setCurrentMonth(currentMonth - 1);
                }
              }}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <FaChevronDown className="transform rotate-90" />
            </button>
            <span className="font-medium">
              {monthNames[currentMonth]} {currentYear}
            </span>
            <button
              onClick={() => {
                if (currentMonth === 11) {
                  setCurrentMonth(0);
                  setCurrentYear(currentYear + 1);
                } else {
                  setCurrentMonth(currentMonth + 1);
                }
              }}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <FaChevronDown className="transform -rotate-90" />
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-xs">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="p-2 text-center font-medium text-gray-500">
                {day}
              </div>
            ))}
            
            {days.map((day, index) => (
              <div key={index} className="p-1">
                {day ? (
                  <button
                    onClick={() => onDateSelect(day)}
                    disabled={isDateDisabled(day)}
                    className={`w-full p-2 text-sm rounded ${
                      isDateSelected(day)
                        ? 'bg-gray-600 text-white'
                        : isDateDisabled(day)
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {day.getDate()}
                  </button>
                ) : (
                  <div className="p-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 p-8">
      {/* Search Field */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">SEARCH</label>
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="City, Hotel, Airport code"
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <FaCrosshairs className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Arrival and Departure */}
      <div className="flex gap-6 mb-6">
        <div className="flex-1 relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">ARRIVAL</label>
          <div 
            className="flex items-center border border-gray-300 rounded-lg px-3 py-3 cursor-pointer hover:border-gray-400"
            onClick={() => {
              setShowArrivalCalendar(!showArrivalCalendar);
              setShowDepartureCalendar(false);
            }}
          >
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span className="text-gray-700">{formatDate(arrivalDate)}</span>
            {showArrivalCalendar ? <FaChevronUp className="ml-auto text-gray-400" /> : <FaChevronDown className="ml-auto text-gray-400" />}
          </div>
          {showArrivalCalendar && (
            <Calendar
              selectedDate={arrivalDate}
              onDateSelect={(date) => handleDateSelect(date, 'arrival')}
              minDate={today}
            />
          )}
        </div>
        <div className="flex-1 relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">DEPARTURE</label>
          <div 
            className="flex items-center border border-gray-300 rounded-lg px-3 py-3 cursor-pointer hover:border-gray-400"
            onClick={() => {
              setShowDepartureCalendar(!showDepartureCalendar);
              setShowArrivalCalendar(false);
            }}
          >
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span className="text-gray-700">{formatDate(departureDate)}</span>
            {showDepartureCalendar ? <FaChevronUp className="ml-auto text-gray-400" /> : <FaChevronDown className="ml-auto text-gray-400" />}
          </div>
          {showDepartureCalendar && (
            <Calendar
              selectedDate={departureDate}
              onDateSelect={(date) => handleDateSelect(date, 'departure')}
              minDate={arrivalDate}
            />
          )}
        </div>
      </div>

      {/* Room and Guest Details */}
      <div className="flex gap-6 mb-6">
        <div className="flex-1 relative">
          <div 
            className="flex items-center border border-gray-300 rounded-lg px-3 py-3 cursor-pointer hover:border-gray-400"
            onClick={() => {
              setShowRoomSelection(!showRoomSelection);
              setShowArrivalCalendar(false);
              setShowDepartureCalendar(false);
            }}
          >
            <FaBed className="text-gray-500 mr-2" />
            <span className="text-gray-700">{rooms.length} Room{rooms.length > 1 ? 's' : ''}</span>
            {showRoomSelection ? <FaChevronUp className="ml-auto text-gray-400" /> : <FaChevronDown className="ml-auto text-gray-400" />}
          </div>
          {showRoomSelection && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 w-full">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">Accommodation Selection</h3>
                  <button
                    onClick={() => setShowRoomSelection(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-2 text-sm font-medium text-gray-500">
                  <span>ROOMS</span>
                  <span>ADULTS</span>
                  <span>CHILDREN</span>
                </div>
                
                {rooms.map((room, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 items-center mb-3">
                    <span className="text-sm">Room {index + 1}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateCount(index, 'adults', -1)}
                        className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                        disabled={room.adults <= 1}
                      >
                        <FaMinus size={12} />
                      </button>
                      <span className="w-8 text-center">{room.adults}</span>
                      <button
                        onClick={() => updateCount(index, 'adults', 1)}
                        className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                        disabled={room.adults >= 4}
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateCount(index, 'children', -1)}
                        className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                        disabled={room.children <= 0}
                      >
                        <FaMinus size={12} />
                      </button>
                      <span className="w-8 text-center">{room.children}</span>
                      <button
                        onClick={() => updateCount(index, 'children', 1)}
                        className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                        disabled={room.children >= 4}
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={addRoom}
                    className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1"
                  >
                    <FaPlus size={12} /> Add Room
                  </button>
                  {rooms.length > 1 && (
                    <button
                      onClick={() => removeRoom(rooms.length - 1)}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      Remove Room
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaUser className="text-gray-500 mr-2" />
            <span className="text-gray-700">{getTotalAdults()} Adult{getTotalAdults() > 1 ? 's' : ''}, {getTotalChildren()} Child{getTotalChildren() !== 1 ? 'ren' : ''}</span>
            <FaInfoCircle className="text-gray-400 ml-2" />
          </div>
        </div>
      </div>

      {/* Special Codes or Rates */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">SPECIAL CODES OR RATES</label>
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
              <FaTag className="text-gray-500 mr-2" />
              <span className="text-gray-700">None</span>
              <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Enter Code"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Purpose of Travel */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">PURPOSE OF TRAVEL</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-gray-700">BUSINESS</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-gray-700">LEISURE</span>
          </label>
        </div>
      </div>

      {/* Book Now Button */}
      <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg text-lg font-medium">
        BOOK NOW
      </button>
    </div>
  );
} 