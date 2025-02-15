import React from "react";
import RankCard from "../Components/Rewards/RankCard";
import { LightGrayText, DarkGrayText } from "../Components/Custom/Text";

const Ranks = () => {
  const ranks = [
    {
      id: 1,
      title: "Trader",
      rp: "10.000 RP",
      bonus: "+5% probability bonus",
      img: "/images/rewards/animal1.png",
    },
    {
      id: 2,
      title: "Master",
      rp: "20.000 RP",
      bonus: "+5% probability bonus",
      img: "/images/rewards/animal2.png",
    },
    {
      id: 3,
      title: "Master",
      rp: "20.000 RP",
      bonus: "+5% probability bonus",
      img: "/images/rewards/animal3.png",
    },
    {
      id: 4,
      title: "Master",
      rp: "20.000 RP",
      bonus: "+5% probability bonus",
      img: "/images/rewards/animal4.png",
    },
  ];

  return (
    <div className="page">
      <header className="relative">
        <img
          className="absolute w-[27px] h-[27px] top-[99px] left-[92px]"
          src="/images/rewards/star2.png"
        ></img>
        <img
          className="absolute w-[27px] h-[27px] top-[80px] left-[320px]"
          src="/images/rewards/star2.png"
        ></img>
        <img
          className="absolute w-[23px] h-[23px] top-[18px] left-[270px]"
          src="/images/rewards/star2.png"
        ></img>
        <div className="flex flex-col justify-center items-center h-[171px]">
          <img src="/images/rewards/star.png" width="50px" height="58px"></img>
          <DarkGrayText className="font-bold text-[14.5px] mt-1">
            Intuition Points
          </DarkGrayText>
          <div className="flex gap-1 items-center mt-1">
            <LightGrayText className="font-bold text-[23.7px]">
              0{" "}
            </LightGrayText>{" "}
            <img
              src="/images/rewards/mark.png"
              width="21px"
              height="21px"
            ></img>
          </div>
        </div>
        <div className="px-[17px]">
          <div className="py-[8px] text-lg flex justify-around">
            <DarkGrayText className="text-bold cursor-pointer">
              Tasks
            </DarkGrayText>
            <LightGrayText className="text-bold cursor-pointer">
              Ranks
            </LightGrayText>
            <DarkGrayText className="text-bold cursor-pointer">
              Leaderboard
            </DarkGrayText>
          </div>
          <div className=" border-2 border-[#666874]"></div>
        </div>
      </header>
      <section className="body px-2">
        <div className="mx-2 px-1 my-2">
          <div className="flex justify-between h-[59px]">
            <LightGrayText className="font-bold text-lg">
              Climb the ranks
            </LightGrayText>
            <div className="px-[5px] mr-1 rounded-3xl flex items-center gap-[10px] w-[75px] h-[29px] text-sm bg-[#2E313E]">
              <img src="/images/rewards/check.png" />
              <LightGrayText>0/20</LightGrayText>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            {ranks.map((rank) => (
              <RankCard key={rank.id} {...rank} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Ranks;
