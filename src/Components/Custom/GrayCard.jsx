import React from "react";

const GrayCard = ({ title, children }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-2xl shadow-md w-full max-w-md">
      <div>{children}</div>
    </div>
  );
};

export default GrayCard;
