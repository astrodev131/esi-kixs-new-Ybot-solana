import React, { useState } from "react";
import Header from "../Components/Header";
import AppBar from "../Components/AppBar";
import CoinSelecter from "../Components/Trade/CoinSelecter";

function TradingView() {
  const [walletConnected, setWalletConnected] = useState(false);
  return (
    <div className="page">
      <main className="main ">
        <Header />
        <div className="flex px-2 justify-center items-center">
          <CoinSelecter />
          <div className="items-center m-auto">
            <img src="/images/alert.png" alt="alert"></img>
          </div>
        </div>

        {/* market status */}
        <div className=" flex  gap-8 text-white p-4 rounded-lg w-full">
          <div className="w-2/5">
            <div className="flex justify-between items-end mb-3">
              <div>
                <p className="text-xs text-gray-400">Market price</p>
                <p className="text-sm font-semibold">$3.81077</p>
              </div>
              <p className="text-sm text-[#710C29]">+1.20%</p>
            </div>
          </div>
          <div className="flex justify-between w-3/5 items-center mb-3">
            <div>
              <p className="text-xs text-gray-400">Market cap</p>
              <p className="text-sm">20 mil</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Hype</p>
              <p className="text-sm">9/10</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Whales</p>
              <p className="text-sm">9/10</p>
            </div>
            <div className="flex items-center justify-center p-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400 hover:cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* trading grahp */}
        <div className="px-2 w-full ">
          <div className="bg-[#1f2937] h-[408px] w-full rounded-3xl"></div>
        </div>

        {/* wallet connection */}
        {walletConnected === false ? (
          <div className="px-2 my-2 w-full">
            <div className="bg-[#1f2937] text-[#898B94] rounded-3xl w-full space-y-5 text-center py-12 ">
              <p>Connect wallet to buy this coin </p>
              <button className="p-2 bg-[#2E313E] border-[1px] hover:text-white hover:bg-[#484b58] border-[#444652] rounded-lg">
                CONNECT WALLET
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full text-center h-full pt-16">
            <button className="bg-[#00D083] hover:bg-[#128a5e] border-[1px] p-4 rounded-lg border-[#0EA773]">
              ADD TO PORTFOLIO
            </button>
          </div>
        )}
        <div className="mb-[90px]"></div>
        <AppBar />
      </main>
    </div>
  );
}

export default TradingView;
