import React, { useState } from "react";

function CoinSelecter() {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState("$STRUMP");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="w-4/5">
      <div className="relative w-full py-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full bg-gray-800 text-white p-3 rounded-lg"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500 rounded-full">
              <img
                src="/images/coins/strump.png"
                className="w-9"
                alt="STRUMP"
              />
            </div>
            <div>
              <p className="text-sm text-[#BABCC0] font-semibold">
                {selectedOption}
              </p>
              <p className="text-xs text-gray-400">TRUMP/USD</p>
            </div>
          </div>
          <img src="/images/coins/dropdown.png" alt="dropdown" />
        </button>

        {isOpen && (
          <div className="absolute w-full bg-gray-800 text-white mt-1 rounded-lg shadow-lg">
            <div
              className="p-3 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleOptionClick("Option 1")}
            >
              Option 1
            </div>
            <div
              className="p-3 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleOptionClick("Option 2")}
            >
              Option 2
            </div>
            <div
              className="p-3 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleOptionClick("Option 3")}
            >
              Option 3
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoinSelecter;
