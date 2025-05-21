import Aos from "aos";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { FaRegThumbsUp } from "react-icons/fa";

const Trending = () => {
  const [trendingTips, setTrendingTips] = useState([]);
  console.log(trendingTips);
  useEffect(() => {
    fetch("https://green-connect-server.onrender.com/trending")
      .then((res) => res.json())
      .then((data) => setTrendingTips(data));
  }, []);
  return (
    <section className="w-full max-w-6xl mx-auto my-12 px-4 py-10">
      <h2
        className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center"
        data-aos="fade-up"
      >
        Top Trending Tips
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trendingTips.length === 0 ? (
          <div className="col-span-3 text-center text-gray-500 dark:text-gray-300">
            No tips found.
          </div>
        ) : (
          trendingTips.map((tip, idx) => (
            <div
              key={tip._id}
                className="w-full flex flex-col items-center rounded-lg shadow border border-gray-200 "
                data-aos="fade-up"
                data-aos-delay={idx * 100}
            >
              <div className="w-full relative">
                <img
                  src={
                    tip.imageUrl ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  alt={tip.title}
                  className="object-cover w-full h-52 rounded-t-lg"
                />
                <span className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {tip.category}
                </span>
                {/* Like */}
                <button
                  className="absolute bottom-4 left-4 rounded-full flex items-center gap-1 px-3 py-1 shadow bg-primary text-white  text-lg font-bold"
                  title="Like"
                  type="button"
                > <FaRegThumbsUp className="text-xl" />
                   <span className="ml-1 text-base">{tip.totalLike || 0}</span>
                </button>
              </div>
              <div className="flex flex-col flex-1 items-center ">
                <h3 className="text-2xl font-bold text-primary mb-2 text-center">
                  {tip.title}
                </h3>
                <p className="text-base mb-2 mx-4 line-clamp-3 min-h-[30px]">
                  {tip.description}
                </p>
                <div className="mt-auto w-full flex flex-col items-center">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={
                        tip.photoURL || "https://ui-avatars.com/api/?name=User"
                      }
                      alt={tip.userName}
                      className="w-10 h-10 rounded-full object-cover border-2 border-primary"
                    />
                    <span className="text-sm font-semibold">
                      {tip.userName}
                    </span>
                  </div>
                  <button className="bg-primary mb-4 cursor-pointer text-white px-6 py-2 rounded-xl font-semibold shadow">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Trending;
