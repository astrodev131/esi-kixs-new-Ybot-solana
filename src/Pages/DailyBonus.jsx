import { useContext, useEffect, useState } from "react";
import AppBar from "../Components/AppBar";
import { PointContext } from "../state/PointContext";
import { BACKEND_URL, DAILY_REWARD_LIST } from "../constants";
import axios from "axios";
import toast from "react-hot-toast";
import { Spinner } from "../Components/Spinner";
import convert from "../utils/convert";

function DailyBonus() {
  const { setPoint, setUser } = useContext(PointContext);
  const [days, setDays] = useState(1);
  const [available, setAvailable] = useState(true);
  const [loading, setLoading] = useState(true);
  const [firstStep, setFirstSteps] = useState(1);
  const totalSteps = 7;

  useEffect(() => {
    const fetchDailyReward = async () => {
      try {
        const response = await axios.post(`${BACKEND_URL}/api/task/daily-task`);
        const { data } = response;
        const { days, available } = data;

        setAvailable(available);
        setDays(days);
        setFirstSteps(
          days < 5 ? 1 : days > DAILY_REWARD_LIST.length ? 14 : days - 3
        );
      } catch (e) {
        console.log("apop@fetchDailyReward", e.message);
      } finally {
        setLoading(false);
      }
      setLoading(false);
    };
    fetchDailyReward();
  }, [setPoint]);

  const handleClaim = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/task/claim-daily`);
      const { data } = response;
      const { days, available, user, status } = data;

      setAvailable(available);
      setDays(days);
      setFirstSteps(
        days < 5 ? 1 : days > DAILY_REWARD_LIST.length ? 14 : days - 3
      );

      if (status == "success") {
        setUser(user);
        setPoint(user?.point);
        toast.success("Successfully Claimed");
      } else {
        toast.error("Claim Failed.");
      }
    } catch (e) {
      console.error(e.message);
      toast.error("Claim Failed.");
    }
    return false;
  };

  return (
    <div>
      <div className="page">
        <main className="main">
          <img
            src={`${
              available
                ? "/images/reward_open.png"
                : "/images/reward_claimed.png"
            }`}
            className="w-full absolute"
          />
          <div className="inner mt-[500px]">
            <div className="flex items-center justify-center">
              {Array.from({ length: 7 }, (_, i) => firstStep + i).map(
                (value, index) => {
                  const stepNumber = index + 1;
                  const isActive = value === days;
                  const isCompleted = value < days;
                  return (
                    <div key={stepNumber} className="flex items-center">
                      <div
                        className={`rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${
                          isCompleted
                            ? "bg-[#FF98F2] text-black w-8 h-8 "
                            : isActive
                            ? "bg-[#FF98F2] text-black border-[6px] border-black w-10 h-10 border-double"
                            : "bg-[#0f121f] w-8 h-8"
                        }`}
                      >
                        {value}
                      </div>
                      {stepNumber < totalSteps && (
                        <div
                          className={`h-1 w-5 ${
                            isCompleted ? "bg-[#FF98F2]" : "bg-[#0f121f]"
                          }`}
                        />
                      )}
                    </div>
                  );
                }
              )}
            </div>
            <p className="text-center text-xl p-4">
              {available ? "Daily Reward" : "Reward Claimed"}
            </p>
            <ul className="my-2 flex justify-center">
              {!loading ? (
                <li className={`flex items-center`}>
                  <div className="flex items-center bg-card py-2 px-4 rounded-3xl">
                    <img src="/images/y_crystal.png" alt="y token" width={24} />
                    <p className="p-1">
                      {convert(DAILY_REWARD_LIST[days - 1]?.point)}
                    </p>
                  </div>
                  <div className="flex items-center mx-4 bg-card py-2 px-4 rounded-3xl">
                    <img
                      src="/images/mystery_box.png"
                      alt="y crystal"
                      width={24}
                    />
                    <p className="p-1">
                      {convert(DAILY_REWARD_LIST[days - 1]?.mystery_box)}
                    </p>
                  </div>
                  <div className="flex items-center bg-card py-2 px-4 rounded-3xl">
                    <img src="/images/boosts.png" alt="boosts" width={24} />
                    <p className="p-1">
                      {convert(DAILY_REWARD_LIST[days - 1]?.boosts)}
                    </p>
                  </div>
                </li>
              ) : (
                <Spinner />
              )}
            </ul>
            <div className="mb-4">
              <p className="text-center text-[18px]">
                Come back tomorrow to get more rewards. Skipping a day resets
                your check-ins.
              </p>
            </div>
            {available && (
              <div className="w-full bottom-24">
                <button
                  className="button button-default mx-auto w-[90%] mb-4"
                  style={{ border: "3px solid white" }}
                  onClick={handleClaim}
                  disabled={!available}
                >
                  Claim Reward
                </button>
              </div>
            )}
          </div>
        </main>
        <AppBar />
      </div>
    </div>
  );
}

export default DailyBonus;
