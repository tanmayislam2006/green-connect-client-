import React from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const categories = [
  "Composting",
  "Plant Care",
  "Vertical Gardening",
  "Hydroponics",
  "Soil Health",
  "Pest Control",
  "Other",
];

const Update = () => {
  const [tip] = useLoaderData();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch(`http://localhost:5000/updatetip/${tip._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Your gardening tip has been updated successfully!");
        } else {
          toast.error("No changes made to the tip.");
        }
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-200 py-8 px-2">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <h2 className="md:col-span-2 text-2xl font-bold text-primary text-center mb-4">
          Update Your Garden Tip
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={tip.title}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
              Plant Type / Topic
            </label>
            <input
              type="text"
              name="plantType"
              defaultValue={tip.plantType}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
              Difficulty Level
            </label>
            <select
              name="difficulty"
              defaultValue={tip.difficulty}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary dark:bg-gray-700 dark:text-white"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
              Images URL
            </label>
            <input
              type="url"
              name="imageUrl"
              defaultValue={tip.imageUrl}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
              Category
            </label>
            <select
              name="category"
              defaultValue={tip.category}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary dark:bg-gray-700 dark:text-white"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
              Availability
            </label>
            <select
              name="availability"
              defaultValue={tip.availability}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary dark:bg-gray-700 dark:text-white"
            >
              <option>Public</option>
              <option>Hidden</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="userName"
              defaultValue={tip.userName}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary dark:bg-gray-700 dark:text-white"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="userEmail"
              defaultValue={tip.userEmail}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary dark:bg-gray-700 dark:text-white"
              readOnly
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={tip.description}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-primary cursor-pointer text-white px-6 py-2 rounded-md font-semibold"
          >
            Update Tip
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
