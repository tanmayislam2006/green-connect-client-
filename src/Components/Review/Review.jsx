import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Aisha",
    text: "Fantastic tips! My garden has never looked better.",
    rating: 5,
  },
  {
    id: 2,
    name: "Karim",
    text: "Great community with helpful advice.",
    rating: 5,
  },
  {
    id: 3,
    name: "Fatima",
    text: "Easy to follow and so effective!",
    rating: 5,
  },
  {
    id: 4,
    name: "Rahim",
    text: "A must-join for any gardener.",
    rating: 5,
  },
];

const Review = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
        What Our Members Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-base-100 border border-primary/40 rounded-lg shadow hover:shadow-lg transition-shadow p-6 flex flex-col gap-4 "
          >
            <div className="flex items-center gap-1 text-primary">
              {Array.from({ length: review.rating }).map((_, i) => (
                <FaStar key={i} size={20} />
              ))}
            </div>
            <p className="text-base italic">"{review.text}"</p>
            <div className="text-sm  font-semibold mt-auto">
              – {review.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Review;
