import React, { useEffect, useState } from "react";

const ExploreGardener = () => {
  const [gardeners, setGardeners] = useState([]);


  useEffect(() => {
    fetch("https://green-connect-server.onrender.com/gardener")
      .then((res) => res.json())
      .then((data) => {
        setGardeners(data);
      });
  }, []);
  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
        Meet Our Gardeners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gardeners.map((gardener) => (
          <div
            key={gardener.id}
            className="rounded-2xl shadow-lg border border-gray-200  flex flex-col items-center p-6"
          >
            <img
              src={gardener.image}
              alt={gardener.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-primary mb-4"
            />
            <h3 className="text-xl font-bold text-primary mb-1">
              {gardener.name}
            </h3>
            <div className="flex gap-3 text-sm mb-2">
              <span>Age: {gardener.age}</span>
              <span>•</span>
              <span>{gardener.gender}</span>
            </div>
            <span
              className={`mb-2 px-3 py-1 rounded-full text-xs font-semibold ${
                gardener.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {gardener.status}
            </span>
            <p className="text-center mb-4 text-sm">{gardener.experiences}</p>
            <div className="text-base font-medium text-primary">
              Total Shared Tips:{" "}
              <span className="font-bold">{gardener.totalTips}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardener;
