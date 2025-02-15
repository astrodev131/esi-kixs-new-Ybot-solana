import CyanButton from "../Components/Custom/Button";
import {
  BrownLargeText,
  BrownText,
  WhiteBoldText,
} from "../Components/Custom/Text";
import GrayCard from "../Components/Custom/GrayCard";
import React from "react";
import {
  Blank,
  BrownGradientCardFirm,
  Mypick,
  GrayGradientCardFirm,
} from "../Components/Earn/GradientCard";

export default function EarnPage() {
  const [activeTab, setActiveTab] = React.useState("winners");

  const winnerbrownlist = [
    {
      id: 1,
      rank: "#1",
      name: "BITCOIN",
      percentage: "10,000",
      imageSrc: "/images/earn/image 9.png",
      mypick: <Mypick />,
      rightText: <WhiteBoldText>100X</WhiteBoldText>,
    },
  ];

  const winnergraylist = [
    {
      id: 1,

      rank: "#2",
      name: "NOT TON",
      percentage: 100,
      imageSrc: "/images/earn/Image.png",
      mypick: <Mypick />,
      rightText: <WhiteBoldText>10X</WhiteBoldText>,
    },
    {
      id: 2,
      rank: "#3",
      name: "TRUMP",
      percentage: 100,
      imageSrc: "/images/earn/image 11.png",
      mypick: <Blank />,
      rightText: <WhiteBoldText>10X</WhiteBoldText>,
    },
  ];
  const mybetgraylist = [
    {
      id: 1,
      rank: "#2",
      name: "NOT TON",
      percentage: 100,
      imageSrc: "/images/earn/Image.png",
      mypick: <Mypick />,
      rightText: <WhiteBoldText>10X</WhiteBoldText>,
    },
  ];

  const tabContent = {
    winners: (
      <>
        {winnerbrownlist.map((card, index) => (
          <BrownGradientCardFirm key={index} {...card} />
        ))}
        {winnergraylist.map((card, index) => (
          <GrayGradientCardFirm key={index} {...card} />
        ))}
      </>
    ),
    "my-bets": (
      <>
        {mybetgraylist.map((card, index) => (
          <BrownGradientCardFirm key={index} {...card} />
        ))}
        {winnergraylist.map((card, index) => (
          <GrayGradientCardFirm key={index} {...card} />
        ))}
      </>
    ),
    "trading-day-summary": <div>asdfasdfasdfsdf</div>,
  };
  return (
    <div className="page">
      <main className="main flex items-center justify-center min-h-screen">
        <div
          className="w-[95%] py-10 mb-5 px-5 mx-auto"
          style={{
            backgroundImage: "url('/images/earn/brownbg.png')",
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
          }}
        >
          <BrownText>Congratulations!</BrownText>
          <BrownLargeText>You won the bet!</BrownLargeText>
          <CyanButton className="ml-5 px-10 py-4 mt-10 rounded-2xl">
            +124.77 USDT
          </CyanButton>
        </div>
        <GrayCard>
          <div>
            <div className="text-xl text-center font-bold">
              Simulation Results
            </div>
            <nav>
              <ul className="flex text-[#383A47] font-bold justify-around">
                {["winners", "my-bets", "trading-day-summary"].map((tab) => (
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
            <div>{tabContent[activeTab]}</div>
          </div>
        </GrayCard>
      </main>
    </div>
  );
}
