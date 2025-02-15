import React from "react";

const GrayCard = ({ children, className }) => {
  return (
    <div
      className={`${className} p-4 rounded-2xl shadow-md  mx-auto bg-card bg-opacity-50`}
    >
      <div>{children}</div>
    </div>
  );
};

export default GrayCard;
