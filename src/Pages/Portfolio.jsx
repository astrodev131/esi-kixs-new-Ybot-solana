import React, { useState } from "react";
import { LightGrayText, DarkGrayText } from "../Components/Custom/Text";
import AppBar from "../Components/AppBar";
import Header from "../Components/Header";

const Portfolio = () => {
  const [isExpanded2, setIsExpanded2] = useState(true);
  const [isExpanded1, setIsExpanded1] = useState(true);
  const rewards = [
    {
      id: 1,
      name: "$FUCK",
      timeLeft: "Hype 9/10",
      image: "/images/rewards/coin1.png",
    },
    {
      id: 2,
      name: "$SEX",
      timeLeft: "Hype 8/10",
      image: "/images/rewards/coin2.png",
    },
    {
      id: 2,
      name: "$NOT",
      timeLeft: "Hype 8/10",
      image: "/images/rewards/coin3.png",
    },
  ];

  return (
    <div>
      <Header />
      <div className="page px-3">
        <div>
          <div className="flex justify-between text-xl font-bold my-2">
            <div className="flex">
              <LightGrayText className="mr-4">My Picks</LightGrayText>
              <DarkGrayText>Last Trading Day</DarkGrayText>
            </div>
            <button
              className="transition cursor-pointer"
              onClick={() => setIsExpanded1((prev) => !prev)}
              aria-label="Toggle Portfolio View"
            >
              <svg
                height="24"
                width="24"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d={isExpanded1 ? "M4 16l8-8 8 8" : "M6 9l6 6 6-6"} />
              </svg>
            </button>
          </div>
          <div className="border border-[#666874]"></div>
          <div>
            <div className="flex items-center my-1">
              <img
                src="/images/rewards/mark2.png"
                className="ml-2 w-[39px] h-[39px]"
              />
              <div className="ml-4 flex flex-col my-2">
                <LightGrayText className="font-bold text-lg">
                  $TRUMP
                </LightGrayText>
                <LightGrayText className="font-bold text-sm ">
                  5 USDT
                </LightGrayText>
              </div>
            </div>
          </div>
          <div className="border border-[#666874]"></div>
        </div>
        <div>
          <div className="flex justify-between text-xl font-bold mt-3 mb-1">
            <div className="flex">
              <LightGrayText className="mr-4">
                Most traded meme coins
              </LightGrayText>
            </div>
            <button
              className="transition cursor-pointer"
              onClick={() => setIsExpanded2((prev) => !prev)}
              aria-label="Toggle Portfolio View"
            >
              <svg
                height="24"
                width="24"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d={isExpanded2 ? "M4 16l8-8 8 8" : "M6 9l6 6 6-6"} />
              </svg>
            </button>
          </div>
          <div className="border border-[#666874]"></div>
          {rewards.map(({ id, name, timeLeft, image }) => (
            <div key={id}>
              <div className="flex h-[70px] items-center justify-between my-1">
                <div className="flex items-center">
                  <img
                    src={image}
                    className="ml-2 w-[39px] h-[39px]"
                    alt={name}
                  />
                  <div className="ml-4 flex flex-col">
                    <LightGrayText className="font-bold text-lg">
                      {name}
                    </LightGrayText>
                    <LightGrayText className="font-bold text-sm">
                      {timeLeft}
                    </LightGrayText>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-block rounded bg-[#00D083] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3"
                >
                  ADD
                </button>
              </div>
              <div className="border border-[#666874]"></div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            type="button"
            className="mt-8 inline-block rounded bg-[#00D083] w-[270px] px-6 py-[21px] text-[20px] font-medium uppercase leading-normal text-white"
          >
            start simulation
          </button>
          <DarkGrayText className="mt-4 w-[273px] h-[43px] text-[10px] font-semibold leading-[17px] mx-auto">
            This will start the simulation of the next trading day and the
            winning meme coins will be determined
          </DarkGrayText>
        </div>
      </div>
      <AppBar />
    </div>
  );
};

export default Portfolio;
