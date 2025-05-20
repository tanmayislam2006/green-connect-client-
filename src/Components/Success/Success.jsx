import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Success = () => {
    useEffect(() => {
      Aos.init({ duration: 1000, once: false });
    }, []);
  return (
    <section className="w-full max-w-6xl mx-auto my-12 px-4 py-12 rounded-2xl  shadow-md flex flex-col-reverse md:flex-row items-center gap-8">
      <div className="flex-1" data-aos="fade-right" data-aos-duration="1000">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Success Stories from Our Gardeners
        </h2>
        <p className=" dark:text-gray-200 text-lg mb-4">
          See how members of Green Connect have transformed their spaces and
          communities through sustainable gardening. Get inspired by their
          journeys and start your own!
        </p>
        <ul className="list-disc pl-5  dark:text-gray-300 space-y-2">
          <li>🏡 Rooftop gardens that feed families year-round.</li>
          <li>🌻 Community composting projects reducing waste.</li>
          <li>🌳 Urban tree planting for cleaner air and shade.</li>
        </ul>
      </div>
      <div
        className="flex-1 flex justify-center"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRh4IXak3KKFdJE9gQjuQ6OOgFm70CC3TuDg&s"
          alt="Success Stories"
          className="rounded-xl w-full max-w-xs object-cover"
        />
      </div>
    </section>
  );
};

export default Success;
