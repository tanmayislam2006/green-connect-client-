import React, { use, useEffect, useState } from "react";
import { FaGlobe, FaLock, FaRegThumbsUp, FaSeedling } from "react-icons/fa";
import GreenContext from "../../Context/GreenContext";
const DashboardHome = () => {
  const [myTips, setMyTips] = useState([]);
  const { firebaseUser } = use(GreenContext);
  const totalLike = myTips.reduce((acc, tip) => acc + (tip.totalLike || 0), 0);
  const totalPublicTips = myTips.filter(tip => tip.availability === 'Public').length;
  const totalPrivateTips = myTips.filter(tip => tip.availability === 'Hidden').length;
  useEffect(() => {
    fetch(`https://green-connect-server.vercel.app/mytips/${firebaseUser?.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTips(data);
      });
  }, [firebaseUser?.uid]);
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto space-y-10">
      {/* Welcome Section */}
      <header className="space-y-1">
        <h1 className="text-3xl font-bold text-primary"> Welcome back</h1>
        <p className="">
          Manage your tips and community with ease.
        </p>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-base-100 rounded-lg shadow-md p-6 flex items-center gap-4 border border-gray-200">
          <FaSeedling className="text-3xl text-primary" />
          <div>
            <p className="text-sm">Total Tips</p>
            <p className="text-2xl font-bold">{myTips?.length}</p>
          </div>
        </div>
        <div className="bg-base-100 rounded-lg shadow-md p-6 flex items-center gap-4 border border-gray-200">
          <FaRegThumbsUp className="text-3xl text-blue-500" />
          <div>
            <p className="text-sm">Total Like</p>
            <p className="text-2xl font-bold">{totalLike}</p>
          </div>
        </div>
        <div className="bg-base-100 rounded-lg shadow-md p-6 flex items-center gap-4 border border-gray-200">
          <FaGlobe className="text-3xl text-primary" />
          <div>
            <p className="text-sm">Public Tips</p>
            <p className="text-2xl font-bold">{totalPublicTips}</p>
          </div>
        </div>
        <div className="bg-base-100 rounded-lg shadow-md p-6 flex items-center gap-4 border border-gray-200">
          <FaLock className="text-3xl text-red-400" />
          <div>
            <p className="text-sm">Private Tips</p>
            <p className="text-2xl font-bold">{totalPrivateTips}</p>
          </div>
        </div>
      </section>

      {/* Recent Tips Table */}
      <section>
        <h2 className="text-xl font-semibold text-primary mb-4 mt-10">
          Recent Tips
        </h2>
        <div className="overflow-x-auto bg-base-100 rounded-xl shadow p-4">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left">Title</th>
                <th className="py-2 px-4 text-left">Category</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {myTips.slice(0, 5).map((tip) => (
                <tr key={tip._id} className="">
                  <td className="py-2 px-4 flex items-center gap-2">
                    <img
                      src={tip.imageUrl}
                      alt={tip.title}
                      className="w-8 h-8 rounded object-cover border"
                    />
                    <span className="font-medium">{tip.title}</span>
                  </td>
                  <td className="py-2 px-4">{tip.category}</td>
                  <td className="py-2 px-4">{tip.date || "N/A"}</td>
                  <td className={`py-2 px-4 font-semibold ${
                    tip.availability === "Public"
                      ? "text-green-600"
                      : tip.availability === "Hidden"
                      ? "text-yellow-600"
                      : "text-gray-600"
                  }`}>
                    {tip.availability}
                  </td>
                </tr>
              ))}
              {myTips.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-4 text-center text-gray-400">
                    No tips found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;
