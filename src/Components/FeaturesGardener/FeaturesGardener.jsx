import React, { useEffect, useState } from "react";

const FeaturesGardener = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch("https://green-connect-server.vercel.app/gardener")
      .then((res) => res.json())
      .then((data) => {
        const active = data.filter((g) => g.status !== "active").slice(0, 8);
        setGardeners(active);
      });
  }, []);

  return (
    <section className="w-full max-w-7xl my-20 mx-auto py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
        Featured Active Gardeners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {gardeners.map((gardener) => (
          <div
            key={gardener.id}
            className="rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center p-6 "
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
            <div className="text-base font-medium text-primary">
              Total Shared Tips:{" "}
              <span className="font-bold">{gardener.totalTips}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGardener;
