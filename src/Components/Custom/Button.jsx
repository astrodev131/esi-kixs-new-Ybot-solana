import React from "react";

const CyanButton = ({ children, className = "" }) => {
  return (
    <button
      className={`bg-[#32CDB3] hover:bg-cyan-500 font-bold text-white py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default CyanButton;
