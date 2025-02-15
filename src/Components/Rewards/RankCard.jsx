import React from "react";
import { LightGrayText } from "../Custom/Text";


const RankCard = ({ title, rp, bonus, img }) => (
  <div className="text-center w-full">
    <span className="inline-flex items-center gap-x-2 py-1.5 px-3 rounded-full text-xs font-medium bg-[#2E313E]">
      <img src="/images/rewards/star3.png" className="w-[10px] h-[12px]" />
      <LightGrayText className="text-[14px] font-bold">{rp}</LightGrayText>
    </span>
    <div className="h-[111px]">
      <img src={img} className="mt-[20px] mx-auto" />
    </div>
    <div>
      <p className="text-lg mt-[33px]">{title}</p>
      <p className="text-sm font-bold mt-[20px]">{bonus}</p>
    </div>
  </div>
);

export default RankCard;