const DashboardHome = () => (
  <div>
    <h2 className="text-2xl font-bold mb-6 text-primary">
      Welcome to Your Dashboard!
    </h2>
    {/* Example cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-green-100 rounded-xl p-6 shadow text-center">
        <div className="text-3xl font-bold text-primary mb-2">12</div>
        <div className="text-gray-700">My Tips</div>
      </div>
      <div className="bg-blue-100 rounded-xl p-6 shadow text-center">
        <div className="text-3xl font-bold text-blue-700 mb-2">5</div>
        <div className="text-gray-700">Shared Tips</div>
      </div>
      <div className="bg-yellow-100 rounded-xl p-6 shadow text-center">
        <div className="text-3xl font-bold text-yellow-700 mb-2">3</div>
        <div className="text-gray-700">Pending Reviews</div>
      </div>
    </div>
    {/* Example table */}
    <div className="overflow-x-auto bg-white rounded-xl shadow p-4">
      <h3 className="text-lg font-semibold mb-4 text-primary">
        Recent Activity
      </h3>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Action</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">2025-06-25</td>
            <td className="py-2 px-4">Added new tip</td>
            <td className="py-2 px-4 text-green-600">Approved</td>
          </tr>
          <tr>
            <td className="py-2 px-4">2025-06-24</td>
            <td className="py-2 px-4">Edited profile</td>
            <td className="py-2 px-4 text-blue-600">Updated</td>
          </tr>
          <tr>
            <td className="py-2 px-4">2025-06-23</td>
            <td className="py-2 px-4">Submitted tip</td>
            <td className="py-2 px-4 text-yellow-600">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
export default DashboardHome;