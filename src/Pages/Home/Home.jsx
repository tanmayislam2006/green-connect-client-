import React, { use, useEffect } from "react";
import GreenContext from "../../Context/GreenContext";
import Loader from "../../Components/Loader/Loader";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Community from "../../Components/Community/Community";
import Aos from "aos";

const Home = () => {
  const { user } = use(GreenContext);
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      once: false,
    })
  },[])

  return (
    <div>
      <Hero />
      {/* About Section */}
      <About />

      {/* Community  Section */}
      <Community/>

    </div>
  );
};

export default Home;
