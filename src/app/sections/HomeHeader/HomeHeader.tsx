import React from "react";

import "./HomeHeader.scss";
import Image from "next/image";
import PhoneDashBoard from "../../../../public/Programmer-pana.svg";
import Nav from "@/app/components/Nav/Nav";
// import PrimaryBtn from "@/app/components/PrimaryBtn";

// #f2f7f8 bg
// #3d4f60 text
const HomeHeader = () => {
  return (
    <div
      className="HomeHeader"
      style={{ backgroundColor: "#f2f7f8", color: "#3d4f60" }}
    >
      <Nav />
      <div className="lg:px-6">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* py-24 sm:py-0 */}
          <div className="pl-3 max-w-xl lg:py-16">
            {/* sm:py-48 lg:py-56 */}
            <div className="text">
              <h1
                className="text-md font-extrabold tracking-wide shadow-2 sm:text-3xl"
                style={{ color: "#1D4ED8" }} //#122231
              >
                THE BEST CHOICE FOR IT SOLUTIONS
              </h1>
              <p
                className="mt-4 text-sm leading-8"
                style={{ color: "#122231" }} //#3d4f60 122231
              >
                At{" "}
                <span style={{ color: "#1D4ED8" }}>
                  NYM Technologies Limited
                </span>
                , we are at the forefront of innovation, driving technological
                advancements across various domains. As a leading technology
                company, we specialize in AI, Software Development, Consultancy,
                Robotics, and Web Development, delivering cutting-edge solutions
                that empower businesses to thrive in the digital age. Get your
                school on board
              </p>
            </div>
            <div className="flex mt-10">
              {/* <PrimaryBtn text="Explore our technology" /> */}
              <button className="bg-transparent text-gray-900 ml-3 font-semibold border text-sm p-2 m-1 rounded-sm border-black">
                Feel the Innovation
              </button>
            </div>
          </div>
          <div className="text-center mt-10 pt-10">
            {/* <Image className="phoneImg" src={PhoneDashBoard} alt="Logo" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
