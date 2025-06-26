import React, { use } from "react";
import GreenContext from "../../Context/GreenContext";

const MyProfile = () => {
  const { user } = use(GreenContext);

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 py-10">
      <div className="w-full max-w-md rounded-3xl shadow-xl overflow-hidden border border-gray-300 flex flex-col items-center">
        <div className="w-full h-32 bg-gradient-to-r from-primary to-green-400 flex flex-col items-center justify-end relative">
          <img
            src={user?.photoURL}
            alt={user?.fullName}
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg absolute left-1/2 -bottom-14 -translate-x-1/2"
          />
        </div>
        <div className="mt-20 w-full flex flex-col items-center px-6 pb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary text-center mb-1">
            {user?.fullName}
          </h2>

          <p className="text-center mb-4">
            <span className="font-semibold">Email:</span> {user?.email}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
            <div className=" rounded-xl p-4 text-center shadow border border-gray-200">
              <div className="text-xs   mb-1 ">User ID</div>
              <div className="font-mono text-sm break-all text-primary">
                {user?.uid}
              </div>
            </div>
            <div className=" rounded-xl p-4 text-center shadow border border-gray-200">
              <div className="text-xs    mb-1">Last Sign In</div>
              <div className="font-semibold">
                {user?.lastSignInTime
                  ? new Date(user?.lastSignInTime).toLocaleString()
                  : "N/A"}
              </div>
            </div>
            <div className=" rounded-xl p-4 text-center shadow border border-gray-200 sm:col-span-2">
              <div className="text-xs   mb-1 ">Account Created</div>
              <div className="font-semibold">
                {user?.creationTime
                  ? new Date(user?.creationTime).toLocaleString()
                  : "N/A"}
              </div>
            </div>
          </div>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-bold text-lg shadow transition w-full max-w-xs">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
