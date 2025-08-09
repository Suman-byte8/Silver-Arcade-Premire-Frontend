import React from "react";
import logo from "/logo.png";

const FullLogo = ({ isFlex }) => {
  return (
    <>
      {isFlex ? (
        <div className="_logo flex items-center justify-center gap-2 p-2">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <span className="uppercase text-3xl font-bold text-[#02008F]">
            Silver Arcade Premeire
          </span>
        </div>
      ) : (
        <div className="_logo flex flex-col items-center justify-center p-2">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <span className="uppercase text-3xl font-bold text-[#02008F]">
            Silver Arcade Premeire
          </span>
        </div>
      )}
    </>
  );
};

export default FullLogo;
