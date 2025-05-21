import React, { useEffect, useState } from 'react';

const FeaturesGardener = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch("https://green-connect-server.onrender.com/gardener") 
      .then(res => res.json())
      .then(data => {
        const active = data.filter(g => g.status === "Active").slice(0, 6);
        setGardeners(active);
      })
  }, []);

  return (
    <section className="w-full max-w-6xl my-20 mx-auto py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
        Featured Active Gardeners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gardeners.map(gardener => (
          <div
            key={gardener.id}
            className="rounded-2xl shadow-lg border border-gray-200  flex flex-col items-center p-6"
          >
            <img
              src={gardener.image}
              alt={gardener.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-primary mb-4"
            />
            <h3 className="text-lg font-bold text-primary mb-1">{gardener.name}</h3>
            <div className="flex gap-2 text-xs  mb-1">
              <span>Age: {gardener.age}</span>
              <span>•</span>
              <span>{gardener.gender}</span>
            </div>
            <p className=" text-center mb-3 text-sm">
              {gardener.experiences}
            </p>
            <div className="text-xs font-medium text-primary mb-1">
              Shared Tips: <span className="font-bold">{gardener.totalTips}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGardener;