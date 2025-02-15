import React from "react";
import Header from "../Components/Header";
import AppBar from "../Components/AppBar";
import DeleteIcon from "../Svg/DeleteIcon";

const NewsPage = () => {
  const NewsImages = [
    "Whales",
    "News",
    "X.com",
    "Influencers",
    "Hype",
    "Other Traders",
    "Prior Winners",
    "Rumors",
  ];
  return (
    <div className="page">
      <main className="main">
        <Header />
        <div className="p-4">
          <div className="bg-[#1b1d2c] flex flex-col items-center w-full rounded-2xl p-6 gap-4">
            <img src="./images/stars.png" alt="" />
            <div className="uppercase text-lg text-[#babcc0] font-semibold mt-6">
              market overview
            </div>
            <div className="text-sm font-semibold text-[#95989f] text-center">
              These events will infliuence the price
              <br /> movements{" "}
            </div>
            <button className="bg-[#324ce1] hover:bg-[#415eff] rounded-sm text-xs uppercase w-full p-4 text-[#b2beed]">
              connect wallet
            </button>
          </div>
          <div className="bg-[#242424] py-3 px-5 rounded-xl my-4 flex relative">
            <div className="bottom-sheet-close !p-1">
              <DeleteIcon />
            </div>
            <img
              src="./images/fight.png"
              alt=""
              className="absolute h-full top-0 right-0"
            />
            <div className="text-[#b1b1b1] text-xl font-semibold">
              Trump will annouce the name of his new dog
            </div>
          </div>
          <div className="p-8 relative w-full flex-wrap flex">
            {NewsImages.map((value, index) => (
              <a
                href={`./news/${value}`}
                className="w-1/4 flex flex-col gap-2 p-2"
                key={index}
              >
                <img
                  src={`./images/news/${value}.png`}
                  alt={value}
                  className="w-full"
                />
                <div className="text-center text-[#7a7d85] text-xs">
                  {value}
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mb-[90px]"></div>
        <AppBar />
      </main>
    </div>
  );
};

export default NewsPage;
