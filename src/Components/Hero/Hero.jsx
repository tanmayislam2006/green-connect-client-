import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      className="w-full mb-16 py-16 md:py-24 flex items-center justify-center"
      data-aos="fade-down"
      data-aos-duration="1200"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left ">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 leading-tight drop-shadow-lg">
            <Typewriter
              
              delaySpeed={1000}
              deleteSpeed={40}
              loop={0}
              typeSpeed={150}
              words={[
                "Grow,Share...",
                "Plant Today...",
                "Inspire Next...",
              ]}
            />
          </h1>
          <p className="text-lg md:text-2xl  mb-8 max-w-xl mx-auto md:mx-0">
            Welcome to{" "}
            <span className="font-semibold text-primary">Green Connect</span> —
            your community for sustainable gardening tips, inspiration, and
            local connections. Join us to make your garden and our planet
            greener!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg shadow transition">
              Explore Trending Tips
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold text-lg shadow transition">
              Join Community
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <img
              src="https://i.ibb.co/1JGqBqLH/16890.jpg"
              alt="Hero Gardening"
              className="rounded-3xl shadow-2xl w-full h-full object-cover border-4 border-primary"
            />
            <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-900 rounded-full px-5 py-2 shadow-lg text-green-700  font-bold text-lg">
              🌱 #EcoFriendly
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-full px-5 py-2 shadow-lg font-bold text-lg">
              👩‍🌾 10K+ Gardeners
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
