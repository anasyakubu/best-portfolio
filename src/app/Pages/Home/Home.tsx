import HomeHeader from "@/app/sections/HomeHeader/HomeHeader";
import ScrollDown from "@/app/sections/ScrollDown/ScrollDown";
import DisplaySection from "@/app/sections/DisplaySection/DisplaySection";
import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <ScrollDown />
      <DisplaySection />
    </div>
  );
};

export default Home;
