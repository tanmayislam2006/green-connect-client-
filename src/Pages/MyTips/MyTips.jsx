import React, { use, useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import GreenContext from "../../Context/GreenContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const MyTips = () => {
  const { firebaseUser } = use(GreenContext);
  const [refresh, setRefresh] = useState(false);
  const [myTips, setMyTips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://green-connect-server.vercel.app/mytips/${firebaseUser?.uid}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyTips(data);
      });
  }, [firebaseUser?.uid, refresh]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4CAF50",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://green-connect-server.vercel.app/deletetip/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setRefresh(!refresh);
              Swal.fire({
                title: "Deleted!",
                text: "Your tip has been deleted.",
                icon: "success",
                confirmButtonColor: "#4CAF50",
              });
            }
          });
        const remainigTips = myTips.filter((tip) => tip._id !== id);
        setMyTips(remainigTips);
      }
    });
  };

  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
        My Garden Tips
      </h1>
      {/* big device */}
      <div className="w-full  rounded-lg shadow-lg overflow-x-auto border border-gray-200 hidden md:block">
        {/* style */}
        <div className="flex items-center shadow gap-2 px-4 py-2 bg-gray-100 border-b border-gray-200">
          <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
        </div>
        <table className="min-w-full bg-transparent">
          <thead>
            <tr className="border-b border-gray-100 text-center">
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Availability</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myTips.map((tip) => (
              <tr
                key={tip._id}
                className="border-b border-gray-100 dark:text-white text-center"
              >
                <td className="py-3 px-4 align-middle">
                  {tip?.imageUrl ? (
                    <img
                      src={tip.imageUrl}
                      alt={tip.title}
                      className="w-14 h-14 object-cover rounded-md shadow mx-auto"
                    />
                  ) : (
                    <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-md shadow text-gray-400 text-xs mx-auto">
                      No Image
                    </div>
                  )}
                </td>
                <td className="py-3 px-4 font-semibold align-middle">
                  {tip.title}
                </td>
                <td className="py-3 px-4 align-middle">{tip.category}</td>
                <td className="py-3 px-4 align-middle">{tip.availability}</td>
                <td className="px-4 py-2 align-middle">
                  <button
                    onClick={() => navigate(`/dashboard/updateTip/${tip._id}`)}
                    className="text-yellow-500 cursor-pointer mx-3 my-2"
                  >
                    <FaPen size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="text-red-500 cursor-pointer"
                  >
                    <FaTrash size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* mobile card  */}
      <div className="w-full max-w-4xl flex flex-col gap-4 md:hidden mt-6">
        {myTips.length === 0 ? (
          <div className="text-center text-gray-500 py-8">No tips found.</div>
        ) : (
          myTips.map((tip) => (
            <div
              key={tip._id}
              className="rounded-lg shadow p-4 flex flex-col gap-2 border border-gray-300"
            >
              <div className="flex items-center gap-4">
                {tip?.imageUrl ? (
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="w-16 h-16 object-cover rounded-md shadow"
                  />
                ) : (
                  <div className="w-16 h-16 flex items-center justify-center  rounded-md shadow text-xs">
                    No Image
                  </div>
                )}
                <div>
                  <div className="font-bold text-lg">{tip.title}</div>
                  <div className="text-sm ">{tip.category}</div>
                  <div className="text-sm">
                    {tip.availability}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => navigate(`/updateTip/${tip._id}`)}
                  className="flex-1 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-md font-semibold shadow"
                >
                  <FaPen className="inline mr-2" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(tip._id)}
                  className="flex-1 bg-red-100 text-red-700 px-4 py-2 rounded-md font-semibold shadow"
                >
                  <FaTrash className="inline mr-2" /> Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyTips;
