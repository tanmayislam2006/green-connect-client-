import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FeaturesGardener = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    // Fetch gardener data from the API
    fetch("https://green-connect-server.vercel.app/gardener")
      .then((res) => res.json())
      .then((data) => {
        // Filter for gardeners whose status is NOT 'active' and take the first 8
        // NOTE: The original code filtered for `g.status !== "active"`.
        // If the intention was to show "active" gardeners, it should be `g.status === "active"`.
        // I'm keeping the original logic as provided, assuming "active" is a status to exclude here.
        const active = data.filter((g) => g.status !== "active").slice(0, 8);
        setGardeners(active);
      })
      .catch((error) => console.error("Failed to fetch gardeners:", error)); // Basic error handling
  }, []);

  // Framer Motion variants for the main container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2, // Delay for the whole section to appear
        when: "beforeChildren", // Animate children after parent
        staggerChildren: 0.1, // Stagger animation for each child
      },
    },
  };

  // Framer Motion variants for individual gardener cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring", // Spring animation for a natural feel
        stiffness: 100, // Controls the stiffness of the spring
        damping: 10, // Controls the damping of the spring
      },
    },
  };

  // Framer Motion variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    // Main section container with motion for overall fade-in and slight lift
    <motion.section
      className="w-full max-w-7xl my-20 mx-auto py-10 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Animate when the component comes into view
      viewport={{ once: true, amount: 0.3 }} // Only animate once, when 30% of the component is visible
    >
      {/* Heading with motion for a subtle top-down entrance */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center"
        variants={headingVariants}
      >
        Featured Active Gardeners
      </motion.h2>
      {/* Grid container for gardener cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {gardeners.map((gardener) => (
          // Each gardener card as a motion.div
          <motion.div
            key={gardener.id}
            className="rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center p-6"
            variants={cardVariants} // Apply card animation variants
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)" }} // Scale up and add deeper shadow on hover
            whileTap={{ scale: 0.98 }} // Slightly shrink on tap/click
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
    </motion.section>
  );
};

export default FeaturesGardener;
