import { useContext, useEffect, useState } from "react";
import AppBar from "../Components/AppBar";
import { PointContext } from "../state/PointContext";
import { BACKEND_URL } from "../constants";
import axios from "axios";
import { Spinner } from "../Components/Spinner";
import convert from "../utils/convert";

function League() {
  const { user } = useContext(PointContext);
  const [userRank, setUserRank] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUserRank = async () => {
      try {
        const response = await axios.post(`${BACKEND_URL}/api/user/get/all`);
        const { data } = response;
        const { users } = data;
        const sortedUsers = users.sort((a, b) => (b.point > a.point ? 1 : -1));
        setUserRank(sortedUsers);
      } catch (e) {
        console.log("apop@userRank", e.message);
      } finally {
        setLoading(false);
      }
      return false;
    };
    fetchUserRank();
  }, []);

  return (
    <div className="page ">
      <main className="main">
        <div className="inner">
          <p className="page-title">Leaderboard</p>
          {!isLoading && (
            <div>
              {userRank.length > 0 && (
                <div
                  className="flex bg-card"
                  style={{
                    height: "100px",
                    borderRadius: "30px",
                    marginTop: "130px",
                    position: 'relative'
                  }}
                >
                  <div
                    className="w-1/3"
                    style={{
                      background: "#211F28",
                      borderRadius: "30px 30px 0 0",
                      height: "150%",
                      transform: "translateX(-50%)",
                      position: 'absolute',
                      left: '50%',
                      marginTop: '-50px'
                    }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={`/images/avatars/${userRank[0].skin_id}.png`}
                        alt=""
                        className="absolute"
                        style={{
                          width: "70%",
                          top: '-28%',
                          left: '15%',
                          border: '3px solid #fcca66',
                          borderRadius: '50%'
                        }}
                      />
                      <img
                        src={`/images/league/1.png`}
                        alt=""
                        className="absolute"
                        style={{
                          width: "100%",
                          top: '-45%',
                        }}
                      />
                    </div>
                    <div className="text-center mb-2 text-[14px]" style={{ marginTop: '-50%' }}>{userRank[0].username.toUpperCase()}</div>
                    <div className="text-center flex justify-center items-center gap-1 text-[14px]" style={{ marginTop: '' }}>
                      <img src="/images/y_crystal.png" width={16} />
                      {convert(userRank[0].point)}
                    </div>
                  </div>
                  {
                    userRank.length > 1 && (
                      <div
                        className="w-1/3"
                        style={{
                          height: "150%",
                          position: 'absolute',
                          left: '0%',
                          marginTop: '-50px'
                        }}
                      >
                        <div className="relative w-full h-full">
                          <img
                            src={`/images/avatars/${userRank[1].skin_id}.png`}
                            alt=""
                            className="absolute"
                            style={{
                              width: "50%",
                              top: '0%',
                              left: '25%',
                              border: '3px solid #999',
                              borderRadius: '50%'
                            }}
                          />
                          <img
                            src={`/images/league/2.png`}
                            alt=""
                            className="absolute"
                            style={{
                              width: "100%",
                              top: '-35%',
                            }}
                          />
                        </div>
                        <div className="text-center mb-2 text-[14px]" style={{ marginTop: '-45%' }}>{userRank[1].username.toUpperCase()}</div>
                        <div className="text-center flex justify-center items-center gap-1 text-[14px]" style={{ marginTop: '' }}>
                          <img src="/images/y_crystal.png" width={16} />
                          {convert(userRank[1].point)}
                        </div>
                      </div>
                    )
                  }
                  {
                    userRank.length > 2 && (
                      <div
                        className="w-1/3"
                        style={{
                          height: "150%",
                          position: 'absolute',
                          right: '0%',
                          marginTop: '-50px'
                        }}
                      >
                        <div className="relative w-full h-full">
                          <img
                            src={`/images/avatars/${userRank[2].skin_id}.png`}
                            alt=""
                            className="absolute"
                            style={{
                              width: "50%",
                              top: '0%',
                              left: '25%',
                              border: '3px solid #999',
                              borderRadius: '50%'
                            }}
                          />
                          <img
                            src={`/images/league/3.png`}
                            alt=""
                            className="absolute"
                            style={{
                              width: "100%",
                              top: '-35%',
                            }}
                          />
                        </div>
                        <div className="text-center mb-2 text-[14px]" style={{ marginTop: '-45%' }}>{userRank[2].username.toUpperCase()}</div>
                        <div className="text-center flex justify-center items-center gap-1 text-[14px]" style={{ marginTop: '' }}>
                          <img src="/images/y_crystal.png" width={16} />
                          {convert(userRank[2].point)}
                        </div>
                      </div>
                    )
                  }
                </div>
              )}
              {userRank.length > 3 && (
                <div className="mt-4 flex flex-col gap-2 bg-card p-4 rounded-3xl">
                  {userRank.slice(2, -1).map((_user, index) => (
                    <div
                      className={`flex rounded-full justify-between items-center py-2 px-4`}
                      key={`level-users-${index + 4}`}
                      style={{
                        background: user._id == _user._id ? "linear-gradient(97.91deg, rgba(108, 109, 169, 0.2) 6.1%, rgba(151, 68, 150, 0.2) 103.66%), rgba(29, 29, 29, 0.05)" : (index + 4) % 2 === 1 ? "#333139" : "",
                        border: user._id == _user._id ? '1px solid rgba(151, 68, 150)' : ''
                      }}
                    >
                      <div className="flex items-center">
                        <div className="">{index + 4}</div>
                        <div className="px-2">
                          <img
                            src={`/images/avatars/${_user.skin_id}.png`}
                            alt={`avatar`}
                            width={44}
                          />
                        </div>
                        <div className="">{_user.username}</div>
                      </div>
                      <div className="flex items-center gap-1 w-[80px] justify-center">
                        <div className="">
                          <img
                            src="/images/y_crystal.png"
                            alt="y token"
                            width={24}
                          />
                        </div>
                        <div className="">{convert(_user.point)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <AppBar />
    </div>
  );
}

export default League;
