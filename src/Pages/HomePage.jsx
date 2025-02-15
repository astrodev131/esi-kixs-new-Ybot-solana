import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import moment from "moment";

import { PointContext } from "../state/PointContext";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";

import { UserBalance } from "../Components/UserBalance";
import AppBar from "../Components/AppBar";
import FarmingCompleteDialog from "../Components/Dialogs/FarmingCompleteDialog";
import DeleteIcon from "../Svg/DeleteIcon";

import {
  BACKEND_URL,
  FARMING_SECONDS,
  POINT_PER_FARMING,
  GAME_DATE,
} from "../constants";
import Alert from "../Components/Alert";
import Header from "../Components/Header";

function HomePage() {
  const navigate = useNavigate();

  const [isDialogOpen, setDialogOpen] = useState(false);

  const {
    user,
    setUser,
    username,
    point,
    setPoint,
    remainTime,
    setRemainTime,
    farming,
    setFarming,
    mystery_box,
    level,
    initialized,
    setInitalized,
    boosted,
    setBoosted,
    skinId,
  } = useContext(PointContext);

  useEffect(() => {
    if (initialized && !farming) {
      setDialogOpen(true);
    }
  }, [farming, initialized]);

  const handleInitialize = async () => {
    console.log("initializing...");
    try {
      const response = await axios.post(`${BACKEND_URL}/api/user/initialize`);
      const { user } = response.data;
      setUser(user);
      setRemainTime(FARMING_SECONDS);
      setFarming(user.farming);
      setInitalized(user.initialized);
      toast.success("Successfully farmed!");
    } catch (e) {
      console.log(e);
      toast.error("Failed");
    }
  };

  const handleStartFarm = async () => {
    console.log("requesting farm...");
    try {
      const response = await axios.post(`${BACKEND_URL}/api/user/farm`);
      const { user } = response.data;
      setUser(user);
      setPoint(user?.point);
      setRemainTime(FARMING_SECONDS);
      setFarming(user.farming);
      toast.success("Successfully farmed!");
    } catch (e) {
      console.error(e);
      toast.error("Failed");
    }
  };

  const handleBoost = async () => {
    console.log("boosting...");
    try {
      const response = await axios.post(`${BACKEND_URL}/api/user/boost`);
      if (response.data.status === "error") {
        toast.error(response.data.message);
        return;
      }
      const { user } = response.data;
      setBoosted(user?.boosted);
      toast.success("Successfully boosted!");
    } catch (e) {
      console.error(e);
      toast.error("Failed");
    }
  };

  const defaultGradient =
    "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500";
  const [auraGradient, setAuraGradient] = useState(
    GAME_DATE[0]?.colors?.gradient || defaultGradient
  );

  const HomeData = [
    {
      title: "Rules",
      alert: "How this game <br /> works",
    },
    {
      title: "Payouts",
      alert: "Predict which coins <br /> will gain the most",
    },
  ];

  const [currentState, setCurrentState] = useState(HomeData[0]);

  const RulesData = [
    "Simulate Trading Days ⏱️<br/> Simulate a trading day anytime with up to 100x<br/>  payouts for nonstop action!",
    "Bet on 500 Meme Coins 💰<br/> Wager on the price changes of 500 fictional<br/>  meme coins.",
    "Market Influences 🌍<br/> Prices move based on news, social media,<br/>  whales, and rumors.",
    "Top 83 Coins Win 🏆<br/> The top 83 coins get 2x - 100x guaranteed<br/>  payouts!",
    "50/50 Winners 🎲<br/> Winners are decided by 50% luck and 50% skill!",
  ];

  const PayoutsData = [
    {
      symbol: "#1",
      description: "Biggest % gain of the day",
      extra: "100X",
    },
    {
      symbol: "#2-11",
      description: "Biggest % gain of the day",
      extra: "10X",
    },
    {
      symbol: "#12-31",
      description: "Biggest % gain of the day",
      extra: "5X",
    },
    {
      symbol: "#32-81",
      description: "Biggest % gain of the day",
      extra: "2X",
    },
  ];

  const RulesComponent = () => {
    return (
      <>
        <ol className="list-decimal pb-3">
          {RulesData.map((rule, index) => (
            <li
              key={index}
              className="py-3"
              dangerouslySetInnerHTML={{ __html: rule }}
            ></li>
          ))}
        </ol>
        <div className="text-center">Good luck and bet wisely! 🍀</div>
      </>
    );
  };

  const PayoutsComponent = () => {
    return (
      <>
        {PayoutsData.map((value, index) => (
          <div key={index} className="py-4 flex items-center">
            <img src="./images/payouts.png" alt="" className="w-12 h-12" />
            <div className="ml-4">
              <p className="text-lg">{value.symbol}</p>
              <p className="text-sm text-[#979a92] xxs:w-max">
                {value.description}
              </p>
            </div>
            <div className="w-full place-content-center">
              <div className="text-[#32cdb3] text-center text-[24px] xxs:text-[45px] font-extrabold">
                {value.extra}
              </div>
            </div>
          </div>
        ))}
        <div className="py-4 flex">
          <div className="ml-16">
            <p className="text-sm">#32-81</p>
            <p className="text-xs text-[#979a92] xxs:w-max">
              Biggest % gain of the day
            </p>
          </div>
          <div className="w-full">
            <div className="text-[#cd3232] text-[24px] xxs:text-[43px] text-center font-extrabold">
              0X
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="page">
      <Header />
      <div className="py-8 px-4">
        <Alert>
          <div className="text-2xl font-semibold text-[#3f3008]">
            <p dangerouslySetInnerHTML={{ __html: currentState.alert }} />
          </div>
        </Alert>
        <div className="border-b-2 my-4 border-b-[#383a47] w-full">
          <div className="py-2 flex gap-4">
            {HomeData.map((value, index) => (
              <div
                key={index}
                onClick={() => setCurrentState(value)}
                className={`cursor-pointer px-4 ${
                  value.title === currentState.title
                    ? "text-[#ffffff]"
                    : "text-[#545458]"
                }`}
              >
                {value.title}
              </div>
            ))}
          </div>
        </div>
        {currentState.title === "Rules" && (
          <div className="text-xl text-center pb-2">
            Meme Coin Arena - Rules 🚀
          </div>
        )}

        <div className="bg-[#21242d] rounded-2xl p-6">
          {currentState.title === "Rules" ? (
            <RulesComponent />
          ) : (
            <PayoutsComponent />
          )}
        </div>
      </div>
      <AppBar />
    </div>
  );
}

export default HomePage;
