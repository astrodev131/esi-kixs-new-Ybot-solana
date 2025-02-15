import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LightGrayText, DarkGrayText } from "../Components/Custom/Text";
import RankCard from "../Components/Rewards/RankCard";
import AppBar from "../Components/AppBar";
import Header from "../Components/Header";

const Rewards = () => {
  const [status, setStatus] = useState("tasks");
  const tasks = [
    {
      id: 1,
      title: "Share Your Trade in",
      timeLeft: "Telegram Stories",
      img: "tg1.png",
      value: "25",
    },
    {
      id: 2,
      title: "Invite a Friend",
      img: "tg2.png",
      value: "10",
    },
    {
      id: 3,
      title: "Share Your Trade in",
      timeLeft: "Twitter",
      img: "x.png",
      value: "10",
    },
  ];
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
      <main className="min">
        <Header />
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
            <img
              src="/images/rewards/star.png"
              width="50px"
              height="58px"
            ></img>
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
              <span
                className={`text-bold cursor-pointer text-[${
                  status == "tasks" ? "#AFB1B5" : "#666874"
                }]`}
              >
                <Link onClick={() => setStatus("tasks")}>Tasks</Link>
              </span>
              <span
                className={`text-bold cursor-pointer text-[${
                  status == "tasks" ? "#666874" : "#AFB1B5"
                }]`}
              >
                <Link onClick={() => setStatus("ranks")}>Ranks</Link>
              </span>
              <DarkGrayText className="text-bold cursor-pointer">
                Leaderboard
              </DarkGrayText>
            </div>
            <div className=" border-[1px] border-[#666874]"></div>
          </div>
        </header>
        <section className={`body px-2 ${status === "tasks" ? "" : "hidden"}`}>
          <div className="mx-2  px-1 my-2 rounded-lg bg-[#23262d] h-[400px] w-max-[385px]">
            <div className="flex h-[70px] items-center justify-between">
              <div className="flex items-center my-1">
                <img
                  src="/images/rewards/mark2.png"
                  className="ml-2 w-[39px] h-[39px]"
                />
                <div className="ml-4 flex flex-col">
                  <LightGrayText className="font-bold text-lg">
                    Daily Text
                  </LightGrayText>
                  <LightGrayText className="font-bold text-sm">
                    8 hours 52 minutes left
                  </LightGrayText>
                </div>
              </div>
              <div className="px-[5px] mr-1 rounded-3xl flex items-center gap-[10px] w-[75px] h-[29px] text-lg bg-[#2E313E]">
                <img src="/images/rewards/check.png" /> 0/3
              </div>
            </div>
            {tasks.map((task) => (
              <div key={task.id} className="px-2">
                <div className="flex my-2 items-center h-[80px] justify-between border-2 border-solid border-[#2b2e37] rounded-xl">
                  <div className="flex items-center my-3">
                    <img
                      src={`/images/rewards/${task.img}`}
                      className="ml-2 w-[23px] h-[23px]"
                    />
                    <div className="ml-4 flex flex-col">
                      <LightGrayText>{task.title}</LightGrayText>
                      <LightGrayText>{task.timeLeft}</LightGrayText>
                    </div>
                  </div>
                  <div className="px-[5px] rounded-3xl flex items-center gap-[10px] w-[85px] h-[30px] text-lg bg-[#2E313E]">
                    <img
                      src="/images/rewards/star1.png"
                      className="w-[18px] h-[18px]"
                    />{" "}
                    <DarkGrayText className="text-sm font-bold">
                      {task.value} RP
                    </DarkGrayText>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center px-3">
              <button
                type="button"
                className="w-full inline-block rounded bg-[#2F303E] px-8 pb-2 pt-2.5 uppercase leading-normal border-solid border-[#3F414D] border-2"
              >
                <DarkGrayText className="text-[13px] font-bold">
                  View all Tasks
                </DarkGrayText>
              </button>
            </div>
          </div>
          <div className="mx-2  px-1 my-2 rounded-lg bg-[#23262d]  w-max-[385px]">
            <div className="flex h-[70px] items-center justify-between">
              <div className="flex items-center my-1">
                <img
                  src="/images/rewards/mark2.png"
                  className="ml-2 w-[39px] h-[39px]"
                />
                <div className="ml-4 flex flex-col">
                  <LightGrayText className="font-bold text-lg">
                    Storm Trade
                  </LightGrayText>
                  <LightGrayText className="font-bold text-sm">
                    8 hours 52 minutes left
                  </LightGrayText>
                </div>
              </div>
              <div className="px-[5px] mr-1 rounded-3xl flex items-center gap-[10px] w-[75px] h-[29px] text-lg bg-[#2E313E]">
                <img src="/images/rewards/check.png" /> 0/5
              </div>
            </div>
            {tasks.map((task) => (
              <div key={task.id} className="px-2">
                <div className="flex my-2 items-center h-[80px] justify-between border-2 border-solid border-[#2b2e37] rounded-xl">
                  <div className="flex items-center my-3">
                    <img
                      src={`/images/rewards/${task.img}`}
                      className="ml-2 w-[23px] h-[23px]"
                    />
                    <div className="ml-4 flex flex-col">
                      <LightGrayText>{task.title}</LightGrayText>
                      <LightGrayText>{task.timeLeft}</LightGrayText>
                    </div>
                  </div>
                  <div className="px-[5px] rounded-3xl flex items-center gap-[10px] w-[85px] h-[30px] text-lg bg-[#2E313E]">
                    <img
                      src="/images/rewards/star1.png"
                      className="w-[18px] h-[18px]"
                    />{" "}
                    <DarkGrayText className="text-sm font-bold">
                      {task.value} RP
                    </DarkGrayText>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={`body px-2 ${status === "ranks" ? "" : "hidden"}`}>
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
        <AppBar />
      </main>
    </div>
  );
};
export default Rewards;
