import React, { use } from "react";
import Loader from "../../Components/Loader/Loader";
import About from "../../Components/About/About";
import Community from "../../Components/Community/Community";
import Success from "../../Components/Success/Success";
import Trending from "../../Components/Trending/Trending";
import FeaturesGardener from "../../Components/FeaturesGardener/FeaturesGardener";
import Slider from "../../Components/Slider/Slider";
import Hero from "../../Components/Hero/Hero";
import GreenContext from "../../Context/GreenContext";

const Home = () => {
  const {user}=use(GreenContext)
  console.log(user);

  return (
    <div>
      <Hero />
      <Slider />
      {/* features gardener */}
      <FeaturesGardener/>
      {/* Top Tips */}
      <Trending />
      {/* About Section */}
      <About />

      {/* Community  Section */}
      <Community />

      {/*  Success Stories */}
      <Success />
    </div>
  );
};

export default Home;
