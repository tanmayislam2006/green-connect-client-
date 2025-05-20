import React, { useEffect } from "react";
import Tree from "../../assets/tree.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Community = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto my-12 px-4 py-16 rounded-2xl  dark:bg-gray-800 shadow-lg flex flex-col-reverse  md:flex-row items-center gap-8">
      <div data-aos="fade-right" data-aos-duration="1000" className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Why Join Green Connect?
        </h2>
        <ul className="list-disc pl-5  space-y-2 text-lg">
          <li>🌱 Post your own gardening tips and inspire others.</li>
          <li>
            🔍 Explore a wide range of plant care advice and eco-friendly
            practices.
          </li>
          <li>🤝 Connect with local gardeners and join community events.</li>
          <li>
            🏆 Earn recognition for your contributions and grow your gardening
            profile.
          </li>
        </ul>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="flex-1 flex justify-center"
      >
        <img
          src={Tree}
          alt="Community Gardening"
          className="rounded-xl  w-full max-w-xs object-cover"
        />
      </div>
    </section>
  );
};

export default Community;
