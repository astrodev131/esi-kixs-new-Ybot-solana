import React from "react";

function Header() {
  return (
    <div className="w-full px-4 h-12 text-white flex justify-between items-center border-b-[1px] border-[#FFFFFF1A]">
      <div className="flex items-center gap-2">
        <img
          src="/images/avatars/2.png"
          width={36}
          height={36}
          alt="avatar"
        ></img>
        <div className="bg-[#324DE2] cursor-pointer h-full text-sm py-1 px-2 rounded-md">
          CONNECT WALLET
        </div>
      </div>
      <div className="flex items-center">
        <img
          src="/images/balance.png"
          alt="balance"
          height={28}
          width={28}
        ></img>
        <div className="text-sm pr-2 pl-1 py-1 text-black border-black rounded-r-2xl bg-[#ffc400]">
          0
        </div>
      </div>
    </div>
  );
}

export default Header;
