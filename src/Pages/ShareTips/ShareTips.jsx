import React, { useContext } from "react";
import GreenContext from "../../Context/GreenContext";
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

const ShareTips = () => {
  const { user } = useContext(GreenContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const tipsInfo = {
      ...data,
      uid: user?.uid,
      photoURL: user?.photoURL,
    };
    fetch("http://localhost:5000/sharetips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
            toast.success("Your gardening tip has been shared successfully!");
        }
      });

    form.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-2">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          Share Your Best Gardening Tips with the Community
        </h1>
        <form
          onSubmit={handleSubmit}
          className="border border-gray-300 shadow-lg rounded-lg p-8 w-full grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="flex flex-col gap-4">
            <div>
              <label className="block font-semibold  mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="How I Grow Tomatoes Indoors"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                required
              />
            </div>
            <div>
              <label className="block  font-semibold mb-1">
                Plant Type / Topic
              </label>
              <input
                type="text"
                name="plantType"
                placeholder="Tomato"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block font-semibold  mb-1">
                Difficulty Level
              </label>
              <select
                name="difficulty"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              >
                <option className="bg-neutral">Easy</option>
                <option className="bg-neutral">Medium</option>
                <option className="bg-neutral">Hard</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold  mb-1">
                Images URL
              </label>
              <input
                type="url"
                name="imageUrl"
                placeholder="https://example.com/image.jpg"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block font-semibold  mb-1">
                Category
              </label>
              <select
                name="category"
                className="w-full  px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              >
                {categories.map((cat) => (
                  <option className="bg-neutral" key={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-semibold  mb-1">
                Availability
              </label>
              <select
                name="availability"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              >
                <option className="bg-neutral">Public</option>
                <option className="bg-neutral">Hidden</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold  mb-1">
                Your Name
              </label>
              <input
                defaultValue={user?.fullName}
                type="text"
                name="userName"
                placeholder="Your Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                readOnly
              />
            </div>
            <div>
              <label className="block font-semibold  mb-1">
                Your Email
              </label>
              <input
                defaultValue={user?.email}
                type="email"
                name="userEmail"
                placeholder="your@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                readOnly
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block font-semibold  mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows={4}
              placeholder="Share your gardening tip in detail..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary"
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
