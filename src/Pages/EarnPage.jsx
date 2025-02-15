import CyanButton from "../Components/Custom/Button";
import {
  BrownLargeText,
  BrownText,
  WhiteBoldText,
  CyanText,
  RedText,
} from "../Components/Custom/Text";
import GrayCard from "../Components/Custom/GrayCard";
import React from "react";
import {
  Blank,
  BrownGradientCardFirm,
  Mypick,
  GrayGradientCardFirm,
} from "../Components/Earn/GradientCard";
import { GradientCard } from "../Components/Earn/GradientCard";
import Devider from "../Components/Devider";
import Header from "../Components/Header";
import AppBar from "../Components/AppBar";

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
    {
      id: 3,
      rank: "#4",
      name: "ELON",
      percentage: 100,
      imageSrc: "/images/earn/image 10.png",
      mypick: <Mypick />,
      rightText: <WhiteBoldText>10X</WhiteBoldText>,
    },
    {
      id: 4,
      rank: "#5",
      name: "TATE",
      percentage: 100,
      imageSrc: "/images/earn/image 12.png",
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
      rightText: <CyanText>100 USDT</CyanText>,
    },
    {
      id: 2,
      rank: "#3",
      name: "TRUMP",
      percentage: 100,
      imageSrc: "/images/earn/image 11.png",
      rightText: <RedText>-10 USDT</RedText>,
    },
  ];
  const mybetbrownlist = [
    {
      id: 1,
      rank: "#2",
      name: "NOT TON",
      percentage: 100,
      imageSrc: "/images/earn/Image.png",
      rightText: <CyanText>500 USDT</CyanText>,
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
        {mybetbrownlist.map((card, index) => (
          <BrownGradientCardFirm key={index} {...card} />
        ))}
        {mybetgraylist.map((card, index) => (
          <GrayGradientCardFirm key={index} {...card} />
        ))}
        <div className="flex justify-between p-6">
          <div className="space-y-5">
            <div className="text-3xl">My Stake</div>
            <WhiteBoldText>10$</WhiteBoldText>
          </div>
          <div className="space-y-5">
            <div className="text-3xl">My Win/Loss</div>
            <CyanText className="text-[40px]">+590$</CyanText>
          </div>
        </div>
      </>
    ),
    "trading-day-summary": (
      <div>
        <GradientCard
          gradientColors={[
            "#E8C670 22.13%",
            "#F1D58F 36.13%",
            "#E8C670 48.08%",
            "#FBE3AA 62.08%",
            "#E8C670 82.9%",
          ]}
        >
          <WhiteBoldText>
            <div className="flex justify-center items-center p-5 font-bold text-[40px]">
              NEWS
            </div>
          </WhiteBoldText>
        </GradientCard>
        <GradientCard
          gradientColors={[
            "#AFAFAF 22.13%",
            "#CBCBCB 36.13%",
            "#BDBDBD 48.08%",
            "#F2F2F2 62.08%",
            "#B5B5B5 82.9%",
          ]}
        >
          <WhiteBoldText>
            <div className="flex justify-center items-center p-5 font-bold text-[40px]">
              INFLUENCERS
            </div>
          </WhiteBoldText>
        </GradientCard>
        <GradientCard
          gradientColors={[
            "#935824 22.13%",
            "#A98866 36.13%",
            "#FFC686 48.08%",
            "#D6AE75 62.08%",
            "#927144 82.9%",
          ]}
        >
          <WhiteBoldText>
            <div className="flex justify-center items-center p-5 font-bold text-[40px]">
              X.com
            </div>
          </WhiteBoldText>
        </GradientCard>
        <GradientCard
          gradientColors={[
            "#E8C670 22.13%",
            "#F1D58F 36.13%",
            "#E8C670 48.08%",
            "#FBE3AA 62.08%",
            "#E8C670 82.9%",
          ]}
        >
          <WhiteBoldText>
            <div className="flex justify-center items-center p-5 font-bold text-[40px]">
              WHALES
            </div>
          </WhiteBoldText>
        </GradientCard>
      </div>
      /* Rectangle 123 */
    ),
  };
  return (
    <div className="page">
      <Header />
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
          <BrownLargeText className="max-w-[70%] ">
            You won the bet!
          </BrownLargeText>
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
              <ul className="flex text-[#383A47] font-bold justify-around max-w-[600px] overflow-x-auto whitespace-nowrap">
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
            <Devider></Devider>
            <div>{tabContent[activeTab]}</div>
          </div>
        </GrayCard>
      </main>
      <AppBar></AppBar>
    </div>
  );
}
