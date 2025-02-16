import React, { useRef } from "react";
import Header from "../Components/Header";
import AppBar from "../Components/AppBar";
import Alert from "../Components/Alert";
import { useParams } from "react-router-dom";
import TabList from "../Components/Custom/TabList";
const NewsData = [
  {
    title: "Whales",
    description: "See which coins  the biggest whales have bought",
    back1: "Bought by 7<br /> whales",
    back2: "Bought by 5<br /> whales",
  },
  {
    title: "News",
    description: "See the upcoming news for the next trading day",
    back1: "Trump will<br /> announce his new<br /> dog’s name",
    back2: "P. Diddy gets his<br /> sentence today",
  },
  {
    title: "Influencers",
    description: "See what influencers are doing",
    back1: "Andrew Tate will<br /> reveal his AI<br /> meme picks",
    back2: "Elon Musk will<br /> stream what he<br /> buys at pump.fun",
  },
  {
    title: "Hype",
    description: "See the hype score for each meme coin category",
    back1: "Pets 9/10",
    back2: "AI 8/10",
  },
  {
    title: "Prior Winners",
    description: "See the winners of the last day",
    back1: "$DOGE<br /> 100x",
    back2: "$Trump<br /> 50x",
  },
  {
    title: "Rumors",
    description: "See the rumors that might become true",
    back1: "Barron Trump<br /> might buy $FUCK",
    back2: "Binance might list<br /> $FUN",
  },
  {
    title: "X.com",
    description: "See trending meme coins on X.com",
    back1: "$DOGE<br /> 10/10",
    back2: "$TATE<br /> 9/10",
  },
  {
    title: "Other Traders",
    description: "See which coins  other users have bought",
    back1: "Bought by 777<br /> other users",
    back2: "Bought by 145<br /> other users",
  },
];

const NewsItemPage = () => {
  const { newsId } = useParams();
  const navRef = useRef(null);

  const CurrentOne = NewsData.find((value) => value.title === newsId);

  const scrollRight = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };
  return (
    <div className="page">
      <Header />

      <div className="p-4">
        <Alert>
          <div className="text-2xl font-semibold ml-20 mt-4 text-[#3f3008]">
            {newsId}
          </div>
        </Alert>
        <div className="border-b-2 my-4 border-b-[#383a47] w-full justify-center relative flex">
          <div
            ref={navRef}
            className="p-2 flex gap-4 w-5/6 overflow-x-auto scrollbar-hidden"
          >
            <button
              onClick={scrollLeft}
              className="left-1 top-1 absolute text-gray-400 hover:text-white p-3 rounded-full bg-[#090c1a2d]"
            >
              {"<"}
            </button>
            <TabList>
              {NewsData.map((value, index) => (
                <a
                  key={index}
                  onClick={() => setCurrentState(value)}
                  className={`px-4 w-max ${
                    value.title === newsId ? "text-[#ffffff]" : "text-[#545458]"
                  }`}
                  href={`./${value.title}`}
                >
                  <p>{value.title}</p>
                </a>
              ))}
            </TabList>
            <button
              onClick={scrollRight}
              className="right-1 top-1 absolute text-gray-400 hover:text-white p-3 rounded-full bg-[#090c1a33]"
            >
              {">"}
            </button>
          </div>
        </div>
        <p className="text-lg font-semibold">{newsId}</p>
        <p className="text-sm text-[#979a92]">{CurrentOne.description}</p>
        <div
          className="rounded-lg w-ful h-[200px] p-6 mt-8 relative"
          style={{
            backgroundImage: `url('/images/news/items/back1.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p
            className="text-2xl font-semibold absolute top-1/2 -translate-y-1/2"
            dangerouslySetInnerHTML={{ __html: CurrentOne.back1 }}
          />
          <div className="bg-[#ffffff3d] w-11/12 h-1 rounded-full absolute bottom-4 left-6">
            <div className="bg-white w-5/12 h-1 rounded-full"></div>
          </div>
          {(newsId === "Whales" || newsId === "Other Traders") && (
            <div className="uppercase text-sm text-[#cfb6eb] font-semibold">
              doge coin
            </div>
          )}
          {(newsId === "Whales" || newsId === "Prior Winners") && (
            <button className="bg-[#0ea773] py-1 px-3 rounded-sm uppercase text-sm absolute left-6 bottom-8">
              add
            </button>
          )}
        </div>
        <div
          className="rounded-xl w-full h-[200px] p-6 mt-6 relative"
          style={{
            backgroundImage: `url('/images/news/items/back2.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p
            className="text-2xl font-semibold absolute top-1/2 -translate-y-1/2"
            dangerouslySetInnerHTML={{ __html: CurrentOne.back2 }}
          />
          {newsId === "Whales" && newsId === "Prior Winners" && (
            <button className="bg-[#0ea773] py-1 px-3 rounded-sm uppercase text-sm absolute left-6 bottom-8">
              add
            </button>
          )}
        </div>
      </div>
      <div className="mb-[90px]"></div>
      <AppBar />
    </div>
  );
};

export default NewsItemPage;
