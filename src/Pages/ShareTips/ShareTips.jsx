import React, { useContext } from "react";
import GreenContext from "../../Context/GreenContext";

const categories = [
  "Composting",
  "Plant Care",
  "Vertical Gardening",
  "Hydroponics",
  "Soil Health",
  "Pest Control",
  "Other",
];

const ShareTips = () => {
  const { user } = useContext(GreenContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    form.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-200 py-8 px-2">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          Share Your Best Gardening Tips with the Community
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="How I Grow Tomatoes Indoors"
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
                placeholder="Tomato"
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
                placeholder="https://example.com/image.jpg"
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
                value={user?.fullName}
                type="text"
                name="userName"
                placeholder="Your Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
                Your Email
              </label>
              <input
                value={user?.email}
                type="email"
                name="userEmail"
                placeholder="your@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows={4}
              placeholder="Share your gardening tip in detail..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-primary cursor-pointer text-white px-6 py-2 rounded-md font-semibold "
            >
              Share Tip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareTips;
