import React, { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { PointContext } from "../state/PointContext";

import ArrowRightIcon from "../Svg/ArrowRightIcon";
import DeleteIcon from "../Svg/DeleteIcon";

import { LEVEL_POINTS, TOP_LEVEL } from "../constants";

const Account = () => {
  const navigate = useNavigate();
  const { username, point, boosts, mysteryBox, yCrystal, level, skinId } = useContext(PointContext);

  const levelProgress = useMemo(() => {
    if (level == TOP_LEVEL) return 100
    const progress = point - LEVEL_POINTS[level - 1]
    const delta = LEVEL_POINTS[level] - LEVEL_POINTS[level - 1]
    return Math.floor(progress / delta * 100)
  }, [level, point])

  return (
    <div className="page ">
      <main className="main">
        <div className="inner">
          <div className="flex items-center justify-between">
            <div className="page-title text-2xl">Account</div>
            <div
              className="w-8 cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              <DeleteIcon />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-6">
            <div
              className="relative"
              style={{ width: "120px", height: "120px" }}
            >
              <img
                src={`/images/avatars/${skinId}.png`}
                style={{ width: "80px", height: "80px", margin: "20px" }}
                alt="avatar"
              />
              <img
                src={`/images/badgelevels/${level}.png`}
                className="absolute top-0"
                style={{ width: "120px", height: "120px" }}
                alt="badge"
              />
            </div>
            <div className="flex flex-col justify-between flex-1">
              <p className=" text-2xl">{username.toUpperCase()}</p>
              <div className="user-level-info bg-[#271e3d] w-20 rounded-full flex place-items-center ">
                <img
                  src={`/images/levels/${level}.png`}
                  className="px-1 "
                  width={28}
                ></img>
                LVL {level}
              </div>
              <div className="flex w-full mt-2 items-center">
                <img
                  src={`/images/levels/${level}.png`}
                  className="bg-[#271e3d] rounded-full"
                  width={24}
                />
                <div className="w-max-[100px] w-full h-4 mx-2 bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden">
                  <div className={`h-4 bg-[#FF98F2] rounded-full`} style={{ width: `${levelProgress}%` }}></div>
                </div>
                <img
                  src={`/images/levels/${level == TOP_LEVEL ? level : level + 1}.png`}
                  className="bg-[#271e3d] rounded-full"
                  width={24}
                />
              </div>
            </div>
          </div>
          <div className="bg-[#271e3d] rounded-full p-4 mb-4 mt-1">
            <div className="flex gap-2 justify-evenly">
              <div className="flex flex-col gap-1">
                <p className="text-[12px]">Y-CRYSTALS</p>
                <div className="flex items-center gap-1">
                  <img src="/images/y_crystal.png" alt="y token" width={16} />
                  <p className="text-[14px]">{point.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[12px]">BOOST</p>
                <div className="flex items-center gap-1">
                  <img src="/images/boosts.png" alt="y token" width={16} />
                  <p className="text-[14px]">{(boosts ?? 0).toLocaleString()}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[12px]">MYSTERY BOX</p>
                <div className="flex items-center gap-1">
                  <img src="/images/mystery_box.png" alt="y token" width={16} />
                  <p className="text-[14px]">{(mysteryBox ?? 0).toLocaleString()}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[12px]">Y-TOKENS</p>
                <div className="flex items-center gap-1">
                  <img src="/images/y_token.png" alt="y token" width={16} />
                  <p className="text-[14px]">{(yCrystal ?? 0).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#271e3d] rounded-3xl p-4 flex flex-col gap-4 mb-8">
            <button
              className="flex items-center w-full justify-between"
              onClick={() => {
                navigate("/friends");
              }}
            >
              <div className="flex gap-2 items-center">
                <img
                  src="/images/account/friends.png"
                  className="w-[48px] h-[48px]"
                />
                <p className="text-[18px]">Friends</p>
              </div>
              <div className="w-[24px] h-[24px]">
                <ArrowRightIcon />
              </div>
            </button>
            <button
              className="flex items-center w-full justify-between"
              onClick={() => {
                navigate("/wallet");
              }}
            >
              <div className="flex gap-2  items-center">
                <img
                  src="/images/account/wallet.png"
                  className="w-[48px] h-[48px]"
                />
                <p className="text-[18px]">Wallet</p>
              </div>
              <div className="w-[24px] h-[24px]">
                <ArrowRightIcon />
              </div>
            </button>
            <button className="flex items-center w-full justify-between">
              <div className="flex gap-2 items-center">
                <img
                  src="/images/account/ai_agent.png"
                  className="w-[48px] h-[48px]"
                />
                <p className="text-[18px]">AI Agent</p>
                <div className="bg-[#fff3] px-2 text-sm rounded-2xl">
                  Coming Soon
                </div>
              </div>
              <div className="w-[24px] h-[24px]">
                <ArrowRightIcon />
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div>FOLLOW US</div>
            <div className="flex items-center gap-4">
              <img
                src="/images/account/telegram.png"
                alt="telegram logo"
                width={48}
              />
              <img src="/images/account/twitter.png" alt="X logo" width={48} />
              <img
                src="/images/account/discord.png"
                alt="discord logo"
                width={48}
              />
              <img
                src="/images/account/instagram.png"
                alt="instagram logo"
                width={48}
              />
            </div>
            <div className="bg-[#271e3d]  cursor-pointer flex items-center gap-4 py-3 px-12 rounded-3xl">
              <p className="text-[18px]">Join Whitelist</p>
              <div className="w-[24px] h-[24px]">
                <ArrowRightIcon />
              </div>
            </div>
            <div className="text-[#fff6] text-[12px]">Version 1.0.00</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Account;
