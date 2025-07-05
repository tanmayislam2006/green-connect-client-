import React from "react";
import Loader from "../../Components/Loader/Loader";
import About from "../../Components/About/About";
import Community from "../../Components/Community/Community";
import Success from "../../Components/Success/Success";
import Trending from "../../Components/Trending/Trending";
import FeaturesGardener from "../../Components/FeaturesGardener/FeaturesGardener";
import Slider from "../../Components/Slider/Slider";
import Hero from "../../Components/Hero/Hero";
import Join from "../../Components/Join/Join";
import { BsArrowDownUp, BsArrowUp } from "react-icons/bs";
import Offer from "../../Components/Offer/Offer";
import Review from "../../Components/Review/Review";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Slider />
      {/* Top Tips */}
      <Trending />
      {/* features gardener */}
      <FeaturesGardener />
      {/* offer section  */}
      <Offer/>
      {/* Community  Section */}
      <Community />
      {/* review section*/}
        <Review/>
      {/* Join Now Section */}
      <Join />
      <div className="flex justify-end my-6">
        <button
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
          className="btn btn-primary  "
        >
          <BsArrowUp size={20} />
        </button>
      </div>
    </div>
  );
};

export default Home;
