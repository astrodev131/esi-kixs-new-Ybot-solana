import React from "react";

const Rewards = () => {
  return (
    <div className="page">
      <header>
        <div className="flex flex-col justify-center items-center h-[171px]">
          <img src="/images/rewards/star.png" width="50px" height="58px"></img>
          <p>Intuition Points </p>
          <div className="flex gap-1 items-center">
            0{" "}
            <img
              src="/images/rewards/mark.png"
              width="21px"
              height="21px"
            ></img>
          </div>
        </div>
      </header>
      <section className="body"></section>
    </div>
  );
};
export default Rewards;
