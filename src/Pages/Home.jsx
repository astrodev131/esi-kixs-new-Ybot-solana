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

function Home() {
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
      setInitalized(user.initialized)
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

  return (
    <div className="page">
      <main className="main">
        <div className="p-4 flex justify-between items-center">
          <div className="flex cursor-pointer items-center">
            <div
              className="flex text-center items-center gap-2"
              onClick={() => {
                navigate("/account");
              }}
            >
              <div
                className="relative"
                style={{ width: "64px", height: "64px" }}
              >
                <img
                  src={`/images/avatars/${skinId}.png`}
                  style={{ width: "36px", height: "36px", margin: "14px" }}
                  alt="avatar"
                />
                <img
                  src={`/images/badgelevels/${level}.png`}
                  className="absolute top-0"
                  style={{ width: "64px", height: "64px" }}
                  alt="badge"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>{username.toUpperCase()}</p>
                <div className="flex items-center bg-[#ffffff26] rounded-2xl justify-center">
                  <img
                    src={`/images/levels/${level}.png`}
                    alt="level"
                    width={24}
                    style={{ marginLeft: "-4px" }}
                  />
                  <p className="text-[12px]">LVL {level}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff26] flex h-[24px] gap-2 rounded-2xl items-center">
            <img
              src="/images/mystery_box.png"
              alt="y token"
              width={36}
              height={36}
            />
            <div>{mystery_box ?? 0}</div>
            <img
              src="/images/add_button.png"
              alt="add button"
              width={26}
              height={26}
              onClick={() => {
                navigate("/store");
              }}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="mt-4">
          <UserBalance point={point} />
        </div>
        <div className="flex-grow relative h-[500px]">
          <Swiper
            slidesPerView={1.3}
            centeredSlides={true}
            spaceBetween={0}
            className="w-full h-full"
            onSlideChangeTransitionEnd={(swiper) => {
              const activeSlide = GAME_DATE[swiper.activeIndex];
              const newGradient =
                activeSlide?.colors?.gradient || defaultGradient;
              setAuraGradient(newGradient);
            }}
          >
            {GAME_DATE.map((game, index) => (
              <SwiperSlide key={index} className="h-full relative">
                <div
                  className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-80 h-80 rounded-full ${game.colors.gradient} filter blur-3xl opacity-30`}
                ></div>
                <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2">
                  <div
                    className="relative flex slider-cadr w-64 h-52 rounded-3xl items-end"
                    style={{
                      backgroundImage: `url(${game.backgroundImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {game.overlayImagePrimary && (
                      <img
                        src={game.overlayImagePrimary}
                        alt=""
                        className={game.overlayImagePrimaryClasses}
                      />
                    )}
                    {game.overlayImageSecondary && (
                      <img
                        src={game.overlayImageSecondary}
                        alt=""
                        className={game.overlayImageSecondaryClasses}
                      />
                    )}
                    <div
                      className="flex items-center justify-between w-full m-4 bg-[rgba(25,24,29,0.53)] p-2 px-4 rounded-full backdrop-blur-md cursor-pointer"
                      onClick={() => navigate(game.link)}
                    >
                      <h3 className="w-full">{game.title}</h3>
                      <FaArrowRight size={12} className="text-white" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mx-auto w-[90%]">
          {!initialized || !farming ? (
            <button
              className="button button-primary button-default mb-4"
              style={{
                background:
                  "linear-gradient(97.91deg, rgba(108, 109, 169, 0.2) 6.1%, rgba(151, 68, 150, 0.2) 103.66%), rgba(29, 29, 29, 0.05)",
              }}
              onClick={!initialized ? handleInitialize : handleStartFarm}
            >
              Tap to start farming
            </button>
          ) : (
            <div>
              <div
                className="button progress button-default mx-auto !w-[90%] mb-4 relative !cursor-default overflow-hidden"
                style={{
                  background:
                    "linear-gradient(97.91deg, rgba(108, 109, 169, 0.2) 6.1%, rgba(151, 68, 150, 0.2) 103.66%), rgba(29, 29, 29, 0.05)",
                }}
              >
                <div
                  className="h-full absolute left-0"
                  style={{
                    width: `${100 - (remainTime / FARMING_SECONDS) * 100}%`,
                    borderRadius: "28px",
                    background: `linear-gradient(143.15deg, #FF98F2 8.37%, #94A0FF 91.49%)`,
                  }}
                ></div>
              </div>
              <div className="text-center">
                <div className="text-sm w-[90%] m-auto font-medium text-[#8b8e93]">
                  Farming{" "}
                  {(POINT_PER_FARMING * (boosted ? 2 : 1)).toLocaleString()} /
                  day
                </div>
                <div className="text-sm font-medium text-[#8b8e93]">
                  {`${moment
                    .duration(remainTime, "seconds")
                    .hours()
                    ?.toString()
                    .padStart(2, "0")}: ${moment
                      .duration(remainTime, "seconds")
                      .minutes()
                      ?.toString()
                      .padStart(2, "0")}: ${moment
                        .duration(remainTime, "seconds")
                        .seconds()
                        ?.toString()
                        .padStart(2, "0")} left`}
                </div>
              </div>
              {initialized && (
                <div
                  className={`flex items-center gap-2 text-center justify-center mt-2 cursor-pointer text-[14px]`}
                  onClick={handleBoost}
                >
                  <img src="/images/boosts.png" alt="" width={20} />
                  Boost Earnings
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <AppBar />
      <div
        className="bottom-sheet"
        style={{ display: isDialogOpen ? "flex" : "none" }}
      >
        <div
          className="bottom-sheet-bg"
          style={{ touchAction: "none", userSelect: "none" }}
        />
        <div className="bottom-sheet-inner">
          <div
            className="bottom-sheet-close"
            onClick={() => {
              setDialogOpen("");
            }}
          >
            <DeleteIcon />
          </div>
          {isDialogOpen && (
            <FarmingCompleteDialog
              setDialogOpen={setDialogOpen}
              handleStartFarm={handleStartFarm}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
