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
    fetch(`http://localhost:5000/mytips/${firebaseUser?.uid}`)
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
        fetch(`http://localhost:5000/deletetip/${id}`, {
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
    <div className="min-h-screen py-10 px-2 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
        My Garden Tips
      </h1>
      <div className="w-full max-w-4xl rounded-lg shadow-lg overflow-x-auto border border-gray-200 ">
        {/* Browser-like header */}
        <div className="flex items-center shadow gap-2 px-4 py-2 bg-gray-100  border-b border-gray-200 ">
          <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
        </div>
        <table className="min-w-full bg-transparent">
          <thead>
            <tr className="border-b border-gray-100 text-center">
              <th className="py-3 px-4 hidden md:table-cell">Image</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4 hidden md:table-cell">Category</th>
              <th className="py-3 px-4">Availability</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myTips.map((tip) => (
              <tr
                key={tip._id}
                className="border-b border-gray-100 dark:text-white  text-center"
              >
                <td className="py-3 px-4 hidden md:table-cell align-middle">
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
                <td className="py-3 px-4 font-semibold   align-middle">
                  {tip.title}
                </td>
                <td className="py-3 px-4  hidden md:table-cell  align-middle">
                  {tip.category}
                </td>
                <td className="py-3 px-4   align-middle">
                  {tip.availability}
                </td>
                <td className="px-4 py-2 align-middle">
                  <button
                    onClick={() => navigate(`/updateTip/${tip._id}`)}
                    className="text-yellow-500 cursor-pointer mx-3 my-2 "
                  >
                    <FaPen size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="text-red-500 cursor-pointer "
                  >
                    <FaTrash size={20} />
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

export default MyTips;
