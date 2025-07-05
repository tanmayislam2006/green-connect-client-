import React from 'react';
import { toast } from 'react-toastify';

const Join = () => {
    return (
      <section 
      id='join'
        className="w-full py-16 relative flex items-center justify-center overflow-hidded"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <form onSubmit={(e)=>{
          e.preventDefault()
          toast.success("Thanks For Join Us")
        }} className="max-w-3xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary  mb-4 drop-shadow-lg">
            Ready to Grow Together?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Join <span className="font-semibold text-primary">Green Connect</span> and become part of a thriving community of gardeners. Subscribe to get the latest tips and stories delivered to your inbox!
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-0 max-w-xl mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg  md:rounded-l-full text-lg border  border-gray-300 focus:outline-primary"
            />
            <button
              className="px-8 py-3 rounded-lg cursor-pointer md:rounded-r-full bg-primary  text-white font-bold text-lg shadow transition border  border-gray-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </section>
    );
};

export default Join;