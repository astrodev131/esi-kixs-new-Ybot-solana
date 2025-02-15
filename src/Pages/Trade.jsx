import React, { useState } from "react";
import Header from "../Components/Header";
import { FaSearch } from "react-icons/fa";
import AppBar from "../Components/AppBar";
import CryptoList from "../Components/CryptoList";

function Trade() {
  const [selectedSort, setSelectedSort] = useState(null);

  const sortOptions = ["Name", "Gainers", "Losers", "Vol 24h"];

  const categories = [
    { name: "All", icon: "", active: true },
    { name: "Hot", icon: "🔥", active: false },
    { name: "New", icon: "🐥", active: false },
    { name: "Pets", icon: "", active: false },
    { name: "Politics", icon: "", active: false },
    { name: "AI", icon: "", active: false },
    { name: "Pump.fun", icon: "", active: false },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <div className="page">
      <main className="main">
        <Header />
        {/* search box */}
        <div className="relative w-full p-2">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 " />
          <input
            type="text"
            placeholder="Token Name Or Ticker"
            className="w-full bg-[#2D2D38] text-gray-400 placeholder-gray-500 rounded-lg py-3 pl-10 pr-4 focus:outline-none"
          />
        </div>

        {/* catigories */}
        <div className="flex space-x-4 text-gray-500 justify-around py-2 px-6 text-[16px] font-semibold">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center space-x-1 ${
                activeCategory === category.name
                  ? "text-white font-bold"
                  : "opacity-50"
              }`}
            >
              {category.icon && <span>{category.icon}</span>}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
        <div className="border-t-2 mx-2 border-[#4b4d5880]"></div>

        {/* sort part */}
        <div className="flex items-center justify-around px-2 py-3 space-x-3 text-gray-500 text-[16px] font-semibold">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg">
            Margin: All
          </button>
          <span className="text-gray-500">Sort by:</span>
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedSort(option)}
              className={`${
                selectedSort === option ? "text-white font-bold" : "opacity-50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <CryptoList />
        <AppBar />
      </main>
    </div>
  );
}

export default Trade;
