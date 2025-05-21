import React from "react";
import { useLoaderData } from "react-router";
import { FaRegThumbsUp } from "react-icons/fa";

const DetailsTip = () => {
  const [tip] = useLoaderData();

  if (!tip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-lg text-primary">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen  flex items-center justify-center py-10 px-2">
      <div className="w-full max-w-6xl  rounded-2xl shadow-2xl p-6 md:p-14 flex flex-col md:flex-row gap-10">
        {/* Left: Image */}
        <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-1/2">
          <img
            src={tip.imageUrl}
            alt={tip.title}
            className="w-full h-72 md:h-[420px] object-cover rounded-xl shadow mb-6"
          />
          <div className="flex items-center gap-4 mt-2">
            <img
              src={tip.photoURL}
              alt={tip.userName}
              className="w-12 h-12 object-cover rounded-full border-2 border-primary"
            />
            <div>
              <div className="text-lg">{tip.userName}</div>
              <div className="text-xs ">{tip.userEmail}</div>
            </div>
          </div>
        </div>
        {/* Right: Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{tip.title}</h1>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full">
                {tip.category}
              </span>
              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">
                {tip.difficulty} Difficulty
              </span>
              <span className={`inline-block ${tip.availability === "Public" ? "bg-yellow-100 text-yellow-700" : "bg-gray-200 text-gray-600"} text-sm font-semibold px-4 py-2 rounded-full`}>
                {tip.availability}
              </span>
              <span className="inline-block bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">
                {tip.plantType}
              </span>
            </div>
            <p className=" mb-8 whitespace-pre-line text-lg">
              {tip.description}
            </p>
            {/* Like Button */}
            <button
              type="button"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full font-semibold shadow cursor-pointer text-lg"
            >
              <FaRegThumbsUp className="text-xl" />
              Like
            </button>
          </div>
          {/* tip time  */}
          <div className="mt-8 flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-sm text-gray-500">
              Posted: <span className="font-medium">Just now</span>
            </span>
            <span className="ml-0 md:ml-6 text-sm text-gray-400">
              Tip ID: {tip._id}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsTip;
