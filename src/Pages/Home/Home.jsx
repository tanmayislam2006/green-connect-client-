
import Loader from "../../Components/Loader/Loader";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Community from "../../Components/Community/Community";
import Success from "../../Components/Success/Success";
import Trending from "../../Components/Trending/Trending";

const Home = () => {

  return (
    <div>
      <Hero />
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
