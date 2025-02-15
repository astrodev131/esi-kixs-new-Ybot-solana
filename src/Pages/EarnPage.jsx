import CyanButton from "../Components/Custom/Button";
import {
  BrownLargeText,
  BrownText,
  WhiteBoldText,
} from "../Components/Custom/Text";
import GrayCard from "../Components/Custom/GrayCard";
import React from "react";
import { Blank, Mypick } from "../Components/Earn/GradientCard";
import {
  BrownGradientCardFirm,
  GrayGradientCardFirm,
} from "../Components/Earn/GradientCard";
import {} from "../Components/Earn/GradientCard";
export default function EarnPage() {
  const [activeTab, setActiveTab] = React.useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  React.useEffect(() => {
    setActiveTab("winners");
  }, []);

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
                      onClick={() => handleTabClick(tab)}
                    >
                      <div>{tab.replace(/-/g, " ")}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              {[
                {
                  rank: "#1",
                  name: "BITCOIN",
                  percentage: "10,000",
                  multiplier: 100,
                  imageSrc: "/images/earn/image 9.png",
                  mypick: <Mypick />,
                },
                {
                  rank: "#2",
                  name: "NOT TON",
                  percentage: 100,
                  multiplier: 10,
                  imageSrc: "/images/earn/Image.png",
                  mypick: <Mypick />,
                },
                {
                  rank: "#3",
                  name: "TRUMP",
                  percentage: 100,
                  multiplier: 10,
                  imageSrc: "/images/earn/image 11.png",
                  mypick: <Blank />,
                },
                {
                  rank: "#4",
                  name: "ELON",
                  percentage: 100,
                  multiplier: 10,
                  imageSrc: "/images/earn/image 10.png",
                  mypick: <Mypick />,
                },
                {
                  rank: "#5",
                  name: "TATE",
                  percentage: 100,
                  multiplier: 10,
                  imageSrc: "/images/earn/image 12.png",
                  mypick: <Blank />,
                },
              ].map((card, index) => (
                <GrayGradientCardFirm key={index} {...card} />
              ))}
            </div>
          </div>
        </GrayCard>
      </main>
    </div>
  );
}
