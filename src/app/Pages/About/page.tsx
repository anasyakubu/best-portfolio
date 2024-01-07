import Connect from "@/app/sections/Connect/Connect";
import Footer from "@/app/sections/Footer/Footer";
import Hobby from "@/app/sections/Hobby/Hobby";
import Intro from "@/app/sections/Intro/Intro";
import React from "react";

const About = () => {
  return (
    <div className="About">
      <Intro />
      <Hobby />
      <Connect />
      <Footer />
    </div>
  );
};

export default About;
