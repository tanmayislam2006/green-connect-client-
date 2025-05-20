import Link from 'daisyui/components/link';
import React from 'react';
import { FaEye } from "react-icons/fa";
import { useLoaderData, useNavigate } from 'react-router';


const BrowseTips = () => {
    const tips=useLoaderData()
    const navigate =useNavigate()
  return (
    <div className="min-h-screen  py-10 px-2 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
        Browse Community Gardening Tips
      </h1>
      <div className="w-full max-w-5xl border  border-gray-200 rounded-lg overflow-x-auto">
        <table className="min-w-full    rounded-lg shadow-lg overflow-hidden">
          <thead>
            <tr className="border-b  border-gray-200">
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr
                key={tip._id}
                className="border-b border-gray-200 "
              >
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
                <td className="py-3 px-4 font-semibold ">
                  {tip.title}
                </td>
                <td className="py-3 px-4 ">
                  {tip.category}
                </td>
                <td className="py-3 px-4 text-center">
                  <button 
                  onClick={()=>navigate(`/detailtip/${tip._id}`)}
                    className="ap-2 bg-primary text-white px-4 py-2 rounded-md cursor-pointer font-semibold shadow"
                  >
                    See More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;