import React from "react";
import { Link } from "react-router-dom";
import { LightGrayText, DarkGrayText } from "../Components/Custom/Text";
import AppBar from "../Components/AppBar";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Join Meme Coin Arena",
      img: "tg1.png",
      value: "25",
    },
    {
      id: 2,
      title: "Join Meme Coin Arena TG channel",
      img: "tg2.png",
      value: "10",
    },
    {
      id: 3,
      title: "Follow Meme Coin Arena on X",
      img: "x.png",
      value: "10",
    },
    {
      id: 4,
      title: "Subscribe to Meme Coin Arena YouTube",
      img: "youtube.png",
      value: "10",
    },
  ];
  return (
    <div className="page">
      <header className="h-[210px] bg-[#20232C]">
        <img src="/images/rewards/back.png" className="mx-auto mt-[40px]" />
      </header>
      <main className="bg-black px-3 rounded-t-3xl mt-[-15px]">
        <div className="my-10">
          <LightGrayText className="text-center text-2xl font-bold">
            Meme Coin Arena Trade Tasks
          </LightGrayText>
          <div className="mt-10 px-3 flex justify-between">
            <div className="flex items-center gap-2">
              <img src="/images/rewards/check.png" />
              <LightGrayText>0/20</LightGrayText>
            </div>
            <span className="inline-flex items-center gap-x-2 py-1.5 px-3 rounded-full text-xs font-medium bg-[#2E313E]">
              <img
                src="/images/rewards/star1.png"
                className="w-[19px] h-[18px]"
              />
              <LightGrayText className="text-[14px] font-bold">
                Earn: 60RP
              </LightGrayText>
            </span>
          </div>
          <div className=" border-[1px] border-[#666874] mt-5"></div>
          <div>
            <LightGrayText className="text-lg font-bold mt-5">
              Meme Coin Arena Trade Tasks
            </LightGrayText>
            {tasks.map((task) => (
              <div key={task.id}>
                <div className="border-2 border-solid border-[#2b2e37] flex justify-between p-[20px] my-3 rounded-xl">
                  <img
                    src={`/images/rewards/${task.img}`}
                    className="ml-2 w-[23px] h-[23px]"
                  />
                  <LightGrayText className="w-[260px]">
                    {task.title}
                  </LightGrayText>
                  <span className="inline-flex items-center gap-x-2 py-1.5 px-3 rounded-full text-xs font-medium bg-[#2E313E]">
                    <img
                      src="/images/rewards/star1.png"
                      className="w-[19px] h-[18px]"
                    />
                    <LightGrayText className="text-[14px] font-bold">
                      {task.value}RP
                    </LightGrayText>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <AppBar />
    </div>
  );
};
export default Tasks;
