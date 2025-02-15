import React from "react";

const GrayCard = ({ children }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-2xl shadow-md w-[95%] mx-auto bg-card bg-opacity-50">
      <div>{children}</div>
    </div>
  );
};

export default GrayCard;
