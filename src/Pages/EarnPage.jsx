import CyanButton from "../Components/Custom/Button";
import {
  BrownLargeText,
  BrownText,
  WhiteBoldText,
} from "../Components/Custom/Text";
import GrayCard from "../Components/Custom/GrayCard";
import React from "react";
import { BrownGradientCard } from "../Components/Earn/GradientCard";

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
      <main className="main">
        <div
          className="w-[95%] py-10 px-5 mx-auto"
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
            <div>
              <nav>
                <ul className="flex text-[#383A47] font-bold justify-around">
                  <li className="px-4 py-2">
                    <a
                      href="#winners"
                      className={`hover:text-[#C0C2C4] ${
                        activeTab === "winners" ? "text-[#C0C2C4]" : ""
                      }`}
                      onClick={() => handleTabClick("winners")}
                    >
                      <div>Winners</div>
                    </a>
                  </li>
                  <li className="px-4 py-2">
                    <a
                      href="#my-bets"
                      className={`hover:text-[#C0C2C4] ${
                        activeTab === "my-bets" ? "text-[#C0C2C4]" : ""
                      }`}
                      onClick={() => handleTabClick("my-bets")}
                    >
                      <div>My Bets</div>
                    </a>
                  </li>
                  <li className="px-4 py-2">
                    <a
                      href="#trading-day-summary"
                      className={`hover:text-[#C0C2C4] ${
                        activeTab === "trading-day-summary"
                          ? "text-[#C0C2C4]"
                          : ""
                      }`}
                      onClick={() => handleTabClick("trading-day-summary")}
                    >
                      <div>Trading Day Summary</div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <BrownGradientCard>
                <div>
                  <div className="flex justify-between w-full items-center">
                    <div className="flex justify-start gap-2 items-center">
                      <div className="w-[60px]">
                        <img src="/images/earn/image 9.png" alt="Earn Image" />
                      </div>
                      <div className="flex flex-col justify-between items-stretch gap-2">
                        <div className="flex justify-around items-center gap-2">
                          <BrownText className="bg-white p-2 rounded-md">
                            #1
                          </BrownText>
                          <BrownText>BITCOIN</BrownText>
                        </div>
                        <BrownText>+10,000%</BrownText>
                      </div>
                    </div>
                    <div>
                      <WhiteBoldText>100X</WhiteBoldText>
                    </div>
                  </div>
                  <div></div>
                </div>
              </BrownGradientCard>
            </div>
          </div>
        </GrayCard>
      </main>
    </div>
  );
}
