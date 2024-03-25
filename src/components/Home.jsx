import React from "react";
import Navbar from "./Navbar";
import PopularSlider from "./PopularSlider";
import PopularSlider2 from "./PopularSlider2";
import PopularSlider3 from "./PopularSlider3";
import TrendingSlider from "./TrendingSlider";
import PopularSlider4 from "./PopularSlider4";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <PopularSlider />
        <PopularSlider2 />
        <PopularSlider3 />
        <PopularSlider4 />
        <TrendingSlider />
      </div>
    </>
  );
};

export default Home;
