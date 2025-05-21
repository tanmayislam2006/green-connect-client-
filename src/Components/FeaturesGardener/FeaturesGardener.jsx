import React, { useEffect, useState } from 'react';

const FeaturesGardener = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch("/api/gardeners") 
      .then(res => res.json())
      .then(data => {
        const active = data.filter(g => g.status === "Active").slice(0, 6);
        setGardeners(active);
      })
      .catch(() => {

        const demo = [
          {
            id: 1,
            name: "Tanmay Islam",
            age: 28,
            gender: "Male",
            status: "Active",
            experiences: "5 years in urban gardening, composting, and vertical farming.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            totalTips: 12,
          },
          {
            id: 2,
            name: "Sara Ahmed",
            age: 34,
            gender: "Female",
            status: "Active",
            experiences: "Expert in hydroponics and organic vegetables.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            totalTips: 18,
          },
          {
            id: 3,
            name: "Rafiq Hasan",
            age: 41,
            gender: "Male",
            status: "Active",
            experiences: "Community garden leader, pest control specialist.",
            image: "https://randomuser.me/api/portraits/men/65.jpg",
            totalTips: 7,
          },
          {
            id: 4,
            name: "Maya Chowdhury",
            age: 30,
            gender: "Female",
            status: "Active",
            experiences: "Balcony gardening and flower arrangement.",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            totalTips: 15,
          },
          {
            id: 5,
            name: "Jamal Uddin",
            age: 36,
            gender: "Male",
            status: "Active",
            experiences: "Organic farming and rooftop gardening.",
            image: "https://randomuser.me/api/portraits/men/77.jpg",
            totalTips: 10,
          },
          {
            id: 6,
            name: "Nadia Rahman",
            age: 29,
            gender: "Female",
            status: "Active",
            experiences: "Herb gardening and composting.",
            image: "https://randomuser.me/api/portraits/women/55.jpg",
            totalTips: 9,
          },
        ];
        setGardeners(demo);
      });
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