import Nav from "@/app/components/Nav/Nav";
import React from "react";
import Image from "next/image";
import "./ResumeHeader.scss";
import BannerOne from "../../../../public/MY-CV-Resume.png";
import Link from "next/link";
import DownloadButton from "@/app/components/DownloadCV/DownloadCV";

const ResumeHeader = () => {
  return (
    <div
      className="ResumeHeader"
      style={{ backgroundColor: "#fcfcfc", color: "#3d4f60", height: "100vh" }}
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
                My Resume 📁
              </h1>
              <p
                className="mt-4 text-sm leading-8"
                style={{ color: "#122231" }} //#3d4f60 122231
              >
                Results-driven and highly motivated Software Engineer with 5+ of
                experience in Computing. Strong Committed to delivering
                high-quality work and exceeding expectations.
              </p>
            </div>
            <div className="flex mt-5">{/* <DownloadButton /> */}</div>
          </div>
          <div className="text-center mt-10 pt-10">
            <Image
              className="phoneImg"
              style={{
                width: "410px",
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

export default ResumeHeader;
