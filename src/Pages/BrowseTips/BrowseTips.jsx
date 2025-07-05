import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loader from "../../Components/Loader/Loader";
import { motion } from "framer-motion";

const BrowseTips = () => {
  const [loading, setLoading] = useState(true);
  const [tips, setTips] = useState([]);
  const [difficulty, setDifficulty] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    let getData = "https://green-connect-server.vercel.app/browsetips";
    if (difficulty !== "All") {
      getData += `?difficulty=${difficulty}`;
    }
    fetch(getData)
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      });
  }, [difficulty]);

  return (
    <div className="min-h-screen py-10 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
        Browse Community Gardening Tips
      </h1>

      {/* Difficulty Filter */}
      <div className="mb-8 flex justify-center">
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="bg-base-200 border border-primary rounded px-4 py-2 font-semibold w-full max-w-xs text-center focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
        >
          <option value="All">All Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {loading ? (
        <div className="py-10 text-center">
          <Loader />
        </div>
      ) : tips.length === 0 ? (
        <div className="py-10 text-center text-lg font-semibold">
          No tips found for this difficulty.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={tip._id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.28 }}
              className="flex flex-col rounded-lg border border-gray-200 shadow hover:shadow-lg transition-shadow bg-base-100 overflow-hidden"
            >
              {tip?.imageUrl ? (
                <img
                  src={tip.imageUrl}
                  alt={tip.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 flex items-center justify-center bg-base-200 text-gray-400 text-sm">
                  No Image
                </div>
              )}

              <div className="p-4 flex flex-col gap-2 flex-grow">
                <h2 className="font-bold text-lg">{tip.title}</h2>
                <p className="text-sm">
                  {tip.category} • {tip.difficulty}
                </p>
                <button
                  onClick={() => navigate(`/detailtip/${tip._id}`)}
                  className="mt-auto bg-primary text-white px-4 py-2 rounded-md font-semibold shadow hover:bg-primary/90 transition cursor-pointer"
                >
                  See More Info
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseTips;
