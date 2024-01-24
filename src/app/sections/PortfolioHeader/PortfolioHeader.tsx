import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./PortfolioHeader.scss";
import Image from "next/image";
import BannerOne from "../../../../public/Code typing-bro.svg";
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
                Yellow 🫡
              </h1>
              <p
                className="mt-4 text-sm leading-8"
                style={{ color: "#122231" }} //#3d4f60 122231
              >
                My name is Anas. I`m a{" "}
                <span className="text-blue-600">Software Engineer</span> and a
                IT student at
                <Link
                  href="https://www.buk.edu.ng/"
                  target="_blank"
                  className="text-blue-600"
                >
                  {" "}
                  Bayero University Kano
                </Link>{" "}
                .
                <br /> My passion for software engineering emerged as the world
                turned digital and I know find myself creating{" "}
                <span className="text-blue-600">solutions</span> to the everyday
                problems that frame our human experience. <br />{" "}
                <span className="text-blue-600">Programming</span> for
                inclusively, equitability, and universal accessibility are my
                core values when it comes to coding positive experiences with
                people in mind.
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
