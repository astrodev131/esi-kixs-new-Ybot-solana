import React, { useState } from "react";
import CyanButton from "../Components/Custom/Button";
import {
  BrownLargeText,
  BrownText,
  WhiteBoldText,
} from "../Components/Custom/Text";
import GrayCard from "../Components/Custom/GrayCard";
import {
  BrownGradientCardFirm,
  GrayGradientCardFirm,
  DarkBrownGradientCardFirm,
} from "../Components/Earn/GradientCard";
import Devider from "../Components/Devider";
import Header from "../Components/Header";
import AppBar from "../Components/AppBar";

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("Daily");

  const list1 = [
    {
      id: 1,
      rank: "#1",
      name: "BITCOIN",
      percentage: "10,000",
      imageSrc: "/images/leaderboard/1.png",
      rightText: (
        <WhiteBoldText className="font-normal">+ 9,563 USDT</WhiteBoldText>
      ),
    },
  ];

  const list2 = [
    {
      id: 2,
      rank: "#2",
      name: "BITCOIN",
      percentage: "10,000",
      imageSrc: "/images/leaderboard/2.png",
      rightText: (
        <WhiteBoldText className="font-normal">+ $5,500 USDT</WhiteBoldText>
      ),
    },
  ];

  const list3 = [
    {
      id: 3,
      rank: "#3",
      name: "BITCOIN",
      percentage: "10,000",
      imageSrc: "/images/leaderboard/3.png",
      rightText: (
        <WhiteBoldText className="font-normal">+ $9,500 USDT</WhiteBoldText>
      ),
    },
  ];

  const list4 = [
    {
      id: 4,
      rank: "#4",
      name: "BITCOIN",
      percentage: "10,000",
      imageSrc: "/images/leaderboard/4.png",
      rightText: <WhiteBoldText>100X</WhiteBoldText>,
    },
  ];

  const list5 = [
    {
      id: 5,
      rank: "#5",
      name: "BITCOIN",
      percentage: "10,000",
      imageSrc: "/images/leaderboard/5.png",
      rightText: <WhiteBoldText>100sdfsdfX</WhiteBoldText>,
    },
  ];

  const tabContent = {
    Daily: (
      <>
        <GrayGradientCardFirm {...list2[0]} />
        <BrownGradientCardFirm {...list1[0]} />
        <DarkBrownGradientCardFirm {...list3[0]} />
        {/* <GrayGradientCardFirm {...list4[0]} />
        <GrayGradientCardFirm {...list5[0]} /> */}
      </>
    ),
    Weekly: <></>,
    Monthly: <></>,
  };

  return (
    <div className="page">
      <Header />
      <main className="main flex items-center p-4 justify-center min-h-screen">
        <div
          className="w-[95%] py-10 mb-5 px-5 mx-auto"
          style={{
            backgroundImage: "url('/images/earn/brownbg.png')",
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
          }}
        >
          <BrownText>Congratulations!</BrownText>
          <BrownLargeText className="max-w-[70%]">
            You won the bet!
          </BrownLargeText>
          <CyanButton className="ml-5 px-10 py-4 mt-5 xs:mt-10 rounded-2xl">
            +124.77 USDT
          </CyanButton>
        </div>
        <GrayCard className={"w-full"}>
          <div>
            <div className="text-xl text-center mb-3 font-bold">
              Leaderboard
            </div>
            <nav>
              <ul className="flex text-[#383A47] font-bold justify-around max-w-[600px] overflow-x-auto whitespace-nowrap">
                {["Daily", "Weekly", "Monthly", "All Time"].map((tab) => (
                  <li key={tab} className="px-4 py-2">
                    <a
                      href={`#${tab}`}
                      className={`hover:text-[#C0C2C4] ${
                        activeTab === tab ? "text-[#C0C2C4]" : ""
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      <div>{tab.replace(/-/g, " ")}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Devider />
            <div>{tabContent[activeTab]}</div>
          </div>
        </GrayCard>
      </main>
      <div className="mb-[95px]"></div>
      <AppBar />
    </div>
  );
}
