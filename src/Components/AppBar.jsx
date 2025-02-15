import { Link, useLocation } from "react-router-dom";

function AppBar() {
  const { pathname } = useLocation();
  const getLinkClass = (path) => {
    return pathname === path ? "text-[#8c5aff]" : "";
  };
  return (
    <div className="z-40 app-bar">
      <nav className="app-bar-nav flex justify-between  relative py-2 px-6">
        <Link
          to="/"
          className={`p-2 flex flex-col justify-center items-center rounded-xl ${getLinkClass(
            "/"
          )} transition-all`}
        >
          <img src="/images/appbar/home.png" alt="home logo" width={28} />
          <div className="text-xs mt-1 ">Home</div>
        </Link>

        <Link
          to="/rewards"
          className={`p-2 flex flex-col justify-center items-center rounded-xl ${getLinkClass(
            "/rewards"
          )} transition-all`}
        >
          <img src="/images/appbar/task.png" alt="rewards logo" width={28} />
          <div className="text-xs mt-1">Rewards</div>
        </Link>
        <Link to="/store" className={`${getLinkClass("/store")}`}>
          <img
            src="/images/appbar/store.png"
            alt="store logo"
            className={`rounded-full absolute w-[64px] !h-[64px]  left-[51%] -translate-x-1/2 -translate-y-1/2 `}
          />
          <div className="mt-10">Store</div>
        </Link>
        <Link
          to="/earn"
          className={`p-2 flex flex-col justify-center items-center rounded-xl ${getLinkClass(
            "/earn"
          )} transition-all`}
        >
          <img
            src="/images/appbar/daily_bonus.png"
            alt="earn logo"
            width={28}
          />
          <div className="text-xs mt-1">Earn</div>
        </Link>

        <Link
          to="/portfolio"
          className={`p-2 flex flex-col justify-center items-center rounded-xl ${getLinkClass(
            "/portfolio"
          )} transition-all`}
        >
          <img
            src="/images/appbar/league.png"
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
