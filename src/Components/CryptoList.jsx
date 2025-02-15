import React from "react";

const cryptos = [
  {
    name: "FUN",
    fullName: "Funcoin",
    multiplier: 75,
    price: 3.84394,
    change: -1.5,
    icon: "fun.png",
  },
  {
    name: "SEX",
    fullName: "Sexcoin",
    multiplier: 50,
    price: 0.002723,
    change: -6.94,
    icon: "sex.png",
  },
  {
    name: "TRUMP",
    fullName: "OFFICIAL",
    multiplier: 50,
    price: 18.4995,
    change: -4.65,
    icon: "trump.png",
  },
  {
    name: "DOGGY",
    fullName: "Dogg",
    multiplier: 50,
    price: 0.176664,
    change: -8.47,
    icon: "doggy.png",
  },
  {
    name: "FTX",
    fullName: "FTcoin",
    multiplier: 125,
    price: 98377.7,
    change: -0.3,
    icon: "ftx.png",
  },
  {
    name: "GPT",
    fullName: "ChatGPT",
    multiplier: 50,
    price: 1.37201,
    change: -3.62,
    icon: "gpt.png",
  },
  {
    name: "CATI",
    fullName: "Catizen",
    multiplier: 50,
    price: 0.150882,
    change: -5.94,
    icon: "cati.png",
  },
  {
    name: "GPT",
    fullName: "ChatGPT",
    multiplier: 50,
    price: 1.37201,
    change: -3.62,
    icon: "gpt.png",
  },
];

const CryptoList = () => {
  return (
    <div className="w-full px-2 py-4 rounded-lg">
      {cryptos.map((crypto, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 mb-3 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-700 rounded-full">
              <img
                src={`./images/coins/${crypto.icon}`}
                className="w-full h-full"
                alt="avater"
              ></img>
            </div>
            <div>
              <h3 className="text-[#98999F] font-semibold">
                {crypto.name} <span className="text-gray-600 text-sm">USD</span>
              </h3>
              <p className="text-gray-600 text-sm items-center ">
                {crypto.fullName}{" "}
                <label className="border-[1px] border-gray-600 px-1 mx-2 rounded-3xl">
                  x{crypto.multiplier}
                </label>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-2/5 gap-4">
            <img src="./images/coins/grahp.png" alt="next" width={64} />
            <div className="text-right">
              <p className="text-[#98999F] font-semibold">
                {crypto.price.toFixed(5)}
              </p>
              <p
                className={`text-sm ${
                  crypto.change < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {crypto.change < 0 ? "" : "+"} {crypto.change}%
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
