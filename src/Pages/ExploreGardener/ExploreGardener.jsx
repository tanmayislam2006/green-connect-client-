import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import GreenContext from "../../Context/GreenContext"; // Assuming this context is not directly used for data fetching here

const ExploreGardener = () => {
  const [gardeners, setGardeners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch gardener data from the API
    fetch("https://green-connect-server.vercel.app/gardener")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setGardeners(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch gardeners:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  // Framer Motion variants for the main container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren", // Animate children after parent
        staggerChildren: 0.08, // Stagger animation for each child
      },
    },
  };

  // Framer Motion variants for individual gardener cards
  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring", // Spring animation for a natural bounce
        stiffness: 120, // Controls the stiffness of the spring
        damping: 12, // Controls the damping of the spring
      },
    },
  };

  // Framer Motion variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto py-10 px-4 text-center text-primary text-lg">
        Loading gardeners...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-7xl mx-auto py-10 px-4 text-center text-red-600 text-lg">
        Error loading gardeners: {error.message}
      </div>
    );
  }

  return (
    // Main container with motion for overall fade-in
    <motion.div
      className="w-full max-w-7xl mx-auto py-10 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Animate when the component comes into view
      viewport={{ once: true, amount: 0.2 }} // Only animate once, when 20% of the component is visible
    >
      {/* Heading with motion for a subtle top-down entrance */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center"
        variants={headingVariants}
      >
        Meet Our Gardeners
      </motion.h2>
      {/* Grid container for gardener cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {gardeners.map((gardener) => (
          // Each gardener card as a motion.div
          <motion.div
            key={gardener.id}
            className="rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center p-6"
            variants={cardVariants} // Apply card animation variants
            whileHover={{ scale: 1.05, boxShadow: "0 15px 20px -5px rgba(0,0,0,0.15), 0 5px 10px -2px rgba(0,0,0,0.08)" }} // Scale up and add deeper shadow on hover
            whileTap={{ scale: 0.95 }} // Slightly shrink on tap/click
          >
            {/* Gardener image */}
            <img
              src={gardener.image || `https://placehold.co/112x112/E0E0E0/333333?text=${gardener.name ? gardener.name.charAt(0) : '?'}`} // Placeholder for missing image
              alt={gardener.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-primary mb-4"
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/112x112/E0E0E0/333333?text=${gardener.name ? gardener.name.charAt(0) : '?'}`; }} // Fallback on error
            />
            {/* Gardener name */}
            <h3 className="text-xl font-bold text-primary mb-1">
              {gardener.name}
            </h3>
            {/* Age and gender */}
            <div className="flex gap-3 text-sm mb-2 text-gray-600">
              <span>Age: {gardener.age}</span>
              <span>•</span>
              <span>{gardener.gender}</span>
            </div>
            {/* Total tips shared */}
            <div className="text-base font-medium text-primary">
              Total Shared Tips:{" "}
              <span className="font-bold">{gardener.totalTips}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExploreGardener;
