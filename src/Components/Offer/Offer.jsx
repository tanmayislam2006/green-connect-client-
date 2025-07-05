import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Offer = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-4 my-12 px-4 py-8 rounded-lg shadow-lg  flex flex-col md:flex-row items-center gap-6 overflow-hidden border-2 border-primary/50"
    >
      {/* Image or Icon */}
      <div className="flex-shrink-0">
        <img
          src="https://i.ibb.co/1JGqBqLH/16890.jpg"
          alt="Special Offer"
          className="w-40 h-40 object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-4 text-center md:text-left flex-grow ">
        <h2 className="text-2xl md:text-3xl font-bold">
          🌿 Special Offer for Garden Lovers!
        </h2>
        <p className="text-base md:text-lg mt-5">
          Join our Green Connect community today and unlock exclusive
          gardening tips, workshops, and 20% off your first event.
        </p>
        <button
          className="mt-2 bg-base-100 text-primary px-5 py-2 rounded-md font-semibold shadow hover:bg-white/90 transition w-fit mx-auto md:mx-0"
        >
          Claim Offer
        </button>
      </div>
    </motion.div>
  );
};

export default Offer;
