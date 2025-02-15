import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Earn from "../Pages/Earn";
import DailyBonus from "../Pages/DailyBonus";
import League from "../Pages/League";
import Account from "../Pages/Account";
import Friends from "../Pages/Friends";
import Wallet from "../Pages/Wallet";
import Store from "../Pages/Store";
import FlappyBird from "../Pages/FlappyBird";
import Spin from "../Pages/Spin";
import Rewards from "../Pages/Rewards";
import EarnPage from "../Pages/EarnPage";
import Tasks from "../Pages/Tasks";
import Trade from "../Pages/Trade";
import HomePage from "../Pages/HomePage";
import NewsPage from "../Pages/NewsPage";
import NewsItemPage from "../Pages/NewsItemPage";
import Portfolio from "../Pages/Portfolio";
import EarnNewsPage from "../Pages/EarnNewsPage";

export default createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/news/:newsId",
    element: <NewsItemPage />,
  },
  {
    path: "/earn",
    // element: <Earn />,
    element: <EarnPage />,
  },
  {
    path: "/earn/news",
    element: <EarnNewsPage />
  },
  {
    path: "/daily-bonus",
    element: <DailyBonus />,
  },
  {
    path: "/trade",
    element: <Trade />,
  },
  {
    path: "/league",
    element: <League />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
  {
    path: "/wallet",
    element: <Wallet />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/flappy-bird",
    element: <FlappyBird />,
  },
  {
    path: "/spin",
    element: <Spin />,
  },
  {
    path: "/rewards",
    element: <Rewards />,
  },
  {
    path: "/rewards/tasks",
    element: <Tasks />,
  },
  {
    path: "/portfolio",
    element:<Portfolio/>
  }
]);
