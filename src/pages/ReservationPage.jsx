import React, { useState } from "react";
import AccommodationForm from "../components/Reservation/AccommodationForm";
import RestaurantForm from "../components/Reservation/RestaurantForm";
import MeetingWeddingForm from "../components/Reservation/MeetingWeddingForm";
import InfoPanel from "../components/Reservation/InfoPanel";
import ReservationSidebar from "../components/Reservation/ReservationSidebar";

export default function ReservationPage() {
  const [activeSection, setActiveSection] = useState("accommodation");

  const renderActiveForm = () => {
    switch (activeSection) {
      case "accommodation":
        return <AccommodationForm />;
      case "restaurant":
        return <RestaurantForm />;
      case "meeting":
        return <MeetingWeddingForm />;
      default:
        return <AccommodationForm />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <ReservationSidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="flex-1">
            {renderActiveForm()}
          </div>

          {/* Right Information Panel */}
          <InfoPanel />
        </div>
      </div>
    </div>
  );
}

