import { Link, useLocation } from "react-router-dom";

function AppBar() {
  const { pathname } = useLocation();
  const getLinkClass = (path) => {
    return pathname === path ? "text-[#8c5aff]" : "";
  };
  return (
    <div className="z-40 app-bar shadow-[1px -1px 8px rgba(0,0,0,0.5)]">
      <nav className="app-bar-nav flex justify-around gap-2 relative p-2">
        <Link
          to="/"
          className={`p-2 hover:bg-[#1D1C17] rounded-2xl z-10 ${getLinkClass(
            "/"
          )}`}
        >
          <img src="/images/appbar/home.png" alt="home logo" width={28} />
        </Link>
        <Link
          to="/earn"
          className={`p-2 hover:bg-[#1D1C17] rounded-2xl z-10 ${getLinkClass(
            "/earn"
          )}`}
        >
          <img src="/images/appbar/task.png" alt="task logo" width={28} />
        </Link>
        <Link to="/store">
          <img
            src="/images/appbar/store.png"
            alt="store logo"
            className={`rounded-full absolute w-[128px] !h-[128px] top-3 left-[50%] -translate-x-1/2 -translate-y-1/2 ${getLinkClass(
              "/store"
            )}`}
          />
        </Link>
        <Link
          to="/daily-bonus"
          className={`p-2 hover:bg-[#1D1C17] rounded-2xl z-10 ${getLinkClass(
            "/daily-bonus"
          )}`}
        >
          <img
            src="/images/appbar/daily_bonus.png"
            alt="daily bonus"
            width={28}
          />
        </Link>
        <Link
          to="/league"
          className={`p-2 hover:bg-[#1D1C17] rounded-2xl z-10 ${getLinkClass(
            "/league"
          )}`}
        >
          <img src="/images/appbar/league.png" alt="league logo" width={28} />
        </Link>
      </nav>
    </div>
  );
}

export default AppBar;
