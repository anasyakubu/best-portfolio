import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./PortfolioHeader.scss";
import Image from "next/image";
import BannerOne from "../../../../public/Programming-pana.svg";
import Nav from "@/app/components/Nav/Nav";
import Link from "next/link";
// import PrimaryBtn from "@/app/components/PrimaryBtn";

// #f2f7f8 bg
// #3d4f60 text
const PortfolioHeader = () => {
  return (
    <div
      className="PortfolioHeader"
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
                Work Gallery 📷
              </h1>
              <p
                className="mt-4 text-sm leading-8"
                style={{ color: "#122231" }} //#3d4f60 122231
              >
                Take a look at some of the{" "}
                <span className="text-blue-600">works</span> I have done so far,
                for the past Years
              </p>
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

export default PortfolioHeader;
