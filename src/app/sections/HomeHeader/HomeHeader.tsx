import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";

import "./HomeHeader.scss";
import Image from "next/image";
import BannerOne from "../../../../public/banner-1.jpg";
import Nav from "@/app/components/Nav/Nav";
import Link from "next/link";
// import PrimaryBtn from "@/app/components/PrimaryBtn";

// #f2f7f8 bg
// #3d4f60 text
const HomeHeader = () => {
  return (
    <div
      className="HomeHeader"
      style={{ backgroundColor: "#fcfcfc", color: "#3d4f60" }}
    >
      <Nav />
      <div className="lg:px-6">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* py-24 sm:py-0 */}
          <div className="pl-3 max-w-xl lg:py-16">
            {/* sm:py-48 lg:py-56 */}
            <div className="text max-w-xl lg:py-16">
              <h1
                className="text-md font-extrabold tracking-wide shadow-2 sm:text-3xl"
                style={{ color: "#000" }} //#122231
              >
                Hello, I`m Anas Yakubu
              </h1>
              <p
                className="mt-4 text-sm leading-8"
                style={{ color: "#122231" }} //#3d4f60 122231
              >
                I am a software engineer who enjoys seamlessly bridging the gap
                between people and digital space by day, and a lofi loving
                doodler by night.
              </p>
            </div>
            <div className="flex mt-5">
              {/* <PrimaryBtn text="Explore our technology" /> */}
              <Link
                href="https://twitter.com/___anaaasss"
                className="bg-transparent text-gray-900 font-semibold border text-sm p-2  rounded-sm border-black flex justify-center items-center"
              >
                <span className="mr-3">Connect with me</span>{" "}
                <FaSquareXTwitter />
              </Link>
            </div>
          </div>
          <div className="text-center mt-10 pt-10">
            <Image
              className="phoneImg"
              style={{
                width: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              src={BannerOne}
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
