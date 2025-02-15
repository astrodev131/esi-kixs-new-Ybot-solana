import { Link, useLocation } from "react-router-dom";

function AppBar() {
  const location = useLocation();

  const getImageSrc = (path, defaultSrc, activeSrc) => {
    return location.pathname === path ? activeSrc : defaultSrc;
  };

  return (
    <div className="z-40 app-bar">
      <nav className="app-bar-nav flex justify-between relative py-2 px-6">
        <Link
          to="/"
          className={`p-2 flex flex-col justify-center items-center rounded-xl transition-all`}
        >
          <img
            src={getImageSrc(
              "/",
              "/images/appbar/home.png",
              "/images/appbar/home1.png"
            )}
            alt="home logo"
            width={28}
          />
          <div className="text-xs mt-1">Home</div>
        </Link>

        <Link
          to="/rewards"
          className={`p-2 flex flex-col justify-center items-center rounded-xl transition-all`}
        >
          <img
            src={getImageSrc(
              "/rewards",
              "/images/appbar/task.png",
              "/images/appbar/task1.png"
            )}
            alt="rewards logo"
            width={28}
          />
          <div className="text-xs mt-1">Rewards</div>
        </Link>
        <Link to="/trade">
          <img
            src="/images/appbar/store.png"
            alt="store logo"
            className={`rounded-full absolute w-[64px] !h-[64px] left-[51%] -translate-x-1/2 -translate-y-1/2`}
          />
          <div className="mt-10">Trade</div>
        </Link>
        <Link
          to="/earn"
          className={`p-2 flex flex-col justify-center items-center rounded-xl transition-all`}
        >
          <img
            src={getImageSrc(
              "/earn",
              "/images/appbar/daily_bonus.png",
              "/images/appbar/daily_bonus1.png"
            )}
            alt="earn logo"
            width={28}
          />
          <div className="text-xs mt-1">Earn</div>
        </Link>

        <Link
          to="/portfolio"
          className={`p-2 flex flex-col justify-center items-center rounded-xl transition-all`}
        >
          <img
            src={getImageSrc(
              "/portfolio",
              "/images/appbar/league.png",
              "/images/appbar/league1.png"
            )}
            alt="portfolio logo"
            width={28}
          />
          <div className="text-xs mt-1">Portfolio</div>
        </Link>
      </nav>
    </div>
  );
}

export default AppBar;
