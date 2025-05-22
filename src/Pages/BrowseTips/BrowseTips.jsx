import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loader from "../../Components/Loader/Loader";
import { FaEye } from "react-icons/fa";

const BrowseTips = () => {
  const [loading, setLoading] = useState(true);
  const [tips, setTips] = useState([]);
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState("All");

  useEffect(() => {
    setLoading(true);
    let getData = "https://green-connect-server.onrender.com/browsetips";
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
    <div className="min-h-screen py-10 px-2 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
        Browse Community Gardening Tips
      </h1>

      {/* dropdown */}
      <div className="mb-6 w-full max-w-5xl flex justify-end">
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="border border-primary rounded px-4 py-2 font-semibold "
        >
          <option className="bg-neutral" value="All">
            All Difficulty
          </option>
          <option className="bg-neutral" value="Easy">
            Easy
          </option>
          <option className="bg-neutral" value="Medium">
            Medium
          </option>
          <option className="bg-neutral" value="Hard">
            Hard
          </option>
        </select>
      </div>

      <div className="w-full hidden md:block     max-w-5xl border border-gray-200 rounded-lg overflow-x-auto">
        {loading ? (
          <div className="py-10 text-center">
            <Loader />
          </div>
        ) : (
          <table className="min-w-full rounded-lg shadow-lg overflow-hidden">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 text-left">Image</th>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Difficulty</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {tips.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-6 text-center">
                    No tips found for this difficulty.
                  </td>
                </tr>
              ) : (
                tips.map((tip) => (
                  <tr key={tip._id} className="border-b border-gray-200">
                    {/* Image*/}
                    <td className="py-3 px-4">
                      {tip?.imageUrl ? (
                        <img
                          src={tip.imageUrl}
                          alt={tip.title}
                          className="w-16 h-16 object-cover rounded-md shadow"
                        />
                      ) : (
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-md shadow text-gray-400 text-xs">
                          No Image
                        </div>
                      )}
                    </td>
                    {/* Title */}
                    <td className="py-3 px-4 font-semibold">{tip.title}</td>
                    {/* Category  */}
                    <td className="py-3 px-4">{tip.category}</td>
                    {/* Difficulty  */}
                    <td className="py-3 px-4">{tip.difficulty}</td>
                    {/* Action */}
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => navigate(`/detailtip/${tip._id}`)}
                        className="cursor-pointer"
                      >
                        <FaEye size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* for mobile device */}
      <div className="w-full max-w-5xl flex flex-col gap-4 md:hidden mt-6">
        {!loading &&
          tips.length > 0 &&
          tips.map((tip) => (
            <div
              key={tip._id}
              className="rounded-lg shadow p-4 flex flex-col gap-2 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                {tip?.imageUrl ? (
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="w-16 h-16 object-cover rounded-md shadow"
                  />
                ) : (
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-md shadow text-gray-400 text-xs">
                    No Image
                  </div>
                )}
                <div>
                  <div className="font-bold text-lg">{tip.title}</div>
                  <div className="text-sm ">
                    {tip.category} • {tip.difficulty}
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate(`/detailtip/${tip._id}`)}
                className="mt-2 bg-primary text-white px-4 py-2 rounded-md cursor-pointer font-semibold shadow w-full"
              >
                See More Info
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BrowseTips;
