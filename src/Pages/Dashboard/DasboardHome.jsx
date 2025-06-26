import React from "react";

const DashboardHome = () => {
  // Example data (replace with real data from API or context)
  const userStats = {
    myTips: 12,
    sharedTips: 5,
    pendingReviews: 3,
  };

  const recentActivities = [
    {
      date: "2025-06-25",
      action: "Added new tip",
      status: "Approved",
    },
    {
      date: "2025-06-24",
      action: "Edited profile",
      status: "Updated",
    },
    {
      date: "2025-06-23",
      action: "Submitted tip",
      status: "Pending",
    },
  ];

  const statusColors = {
    Approved: "text-green-600",
    Updated: "text-blue-600",
    Pending: "text-yellow-600",
  };

  return (
    <div className="space-y-6">
      {/* Welcome Heading */}
      <h1 className="text-2xl lg:text-3xl font-bold text-green-600">
        Welcome to Your Dashboard!
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl bg-green-100 text-center p-6 shadow">
          <p className="text-3xl font-bold text-green-700">
            {userStats.myTips}
          </p>
          <p className="mt-2 font-semibold">My Tips</p>
        </div>
        <div className="rounded-xl bg-blue-100 text-center p-6 shadow">
          <p className="text-3xl font-bold text-blue-700">
            {userStats.sharedTips}
          </p>
          <p className="mt-2 font-semibold">Shared Tips</p>
        </div>
        <div className="rounded-xl bg-yellow-100 text-center p-6 shadow">
          <p className="text-3xl font-bold text-yellow-700">
            {userStats.pendingReviews}
          </p>
          <p className="mt-2 font-semibold">Pending Reviews</p>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold text-green-600 mb-4">
          Recent Activity
        </h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="font-semibold text-gray-700">Date</th>
                <th className="font-semibold text-gray-700">Action</th>
                <th className="font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity, index) => (
                <tr key={index}>
                  <td>{activity.date}</td>
                  <td>{activity.action}</td>
                  <td className={statusColors[activity.status]}>
                    {activity.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
