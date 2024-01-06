import HomeHeader from "@/app/sections/HomeHeader/HomeHeader";
import ScrollDown from "@/app/sections/ScrollDown/ScrollDown";
import DisplaySection from "@/app/sections/DisplaySection/DisplaySection";
import React from "react";
import Footer from "@/app/sections/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <div
        className="flex justify-center items-center"
        style={{ backgroundColor: "#fcfcfc", color: "#3d4f60" }}
      >
        <ScrollDown />
      </div>
      <DisplaySection />
      <Footer />
    </div>
  );
};

export default Home;
