import React from "react";
import Alert from "../Components/Alert";
import Header from "../Components/Header";
import AppBar from "../Components/AppBar";

const EarnNewsPage = () => {
  return (
    <div className="page">
      <Header />
      <div className="p-4">
        <Alert>
          <div className="text-2xl font-semibold text-[#3f3008]">
            <p>
              Trading Day
              <br /> Summary
            </p>
          </div>
        </Alert>
        <div className="text-3xl uppercase font-semibold text-center p-4">News</div>
        <div className="bg-[#21242d] rounded-2xl p-4 text-base text-white mt-8 flex flex-col gap-4">
          <p className="font-bold">Elon Musk Tweets 🚀</p>
          <p>
             Elon Musk tweeted about a new meme coin, $DOGE2, causing its price
            to skyrocket by 200%! Investors rushed in, causing massive profits
            for quick players.
          </p>
          <p className="font-bold">Shiba Mooning Again 🌕</p>
          <p>
             ShibaCoin saw a major rally after a viral meme on Reddit, pushing
            its value up by 150% in just a few hours. Early buyers cashed out
            with huge returns!
          </p>
          <p className="font-bold">Bearish Sentiment on $PEPE 🐸</p>
          <p>
            A well-known crypto influencer warned that $PEPE could be a "pump
            and dump," causing a sharp 40% drop. Panic selling followed as the
            coin crashed to nearly 0.
          </p>
        </div>
      </div>
      <AppBar />
    </div>
  );
};

export default EarnNewsPage;
