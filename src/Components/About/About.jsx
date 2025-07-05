import React, { useEffect } from "react";
import Logo from "../../assets/green-connect.png";
import "aos/dist/aos.css";
import Aos from "aos";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);
  return (
    <section className="w-full max-w-7xl mx-auto my-10 px-4 py-10 rounded-2xl dark:bg-gray-800 shadow-md flex flex-col-reverse md:flex-row items-center gap-8">
      <div className="flex-1" data-aos="fade-right" data-aos-duration="1000">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          About Green Connect
        </h2>
        <p className="text-lg mb-4">
          <span className="font-semibold text-primary">Green Connect</span> is
          your community hub for sharing, discovering, and learning about
          sustainable gardening. Whether you're a beginner or an expert, you'll
          find tips, events, and inspiration to help your garden thrive.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Share your own gardening experiences and tips.</li>
          <li>Browse advice from fellow gardeners in your area.</li>
          <li>Join events and workshops to grow your skills.</li>
          <li>Connect with a supportive, eco-friendly community.</li>
        </ul>
      </div>
      <div
        className="flex-1 flex justify-center"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          src={Logo}
          alt="About Green Connect"
          className="rounded-xl w-full max-w-xs object-cover"
        />
      </div>
    </section>
  );
};

export default About;
