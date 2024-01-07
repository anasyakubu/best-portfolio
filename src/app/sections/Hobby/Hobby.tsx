import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./Hobby.scss";
import Image from "next/image";
import BannerOne from "../../../../public/Code typing-bro.svg";
import Nav from "@/app/components/Nav/Nav";
import Link from "next/link";
// import PrimaryBtn from "@/app/components/PrimaryBtn";

// #f2f7f8 bg
// #3d4f60 text
const Hobby = () => {
  return (
    <div
      className="HomeHeader"
      style={{ backgroundColor: "#fcfcfc", color: "#3d4f60" }}
    >
      <div className="lg:px-6">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* py-24 sm:py-0 */}
          <div className="pl-3 max-w-xl lg:py-16">
            {/* sm:py-48 lg:py-56 */}
            <div className="text max-w-xl lg:py-16">
              <h1
                className="text-md font-extrabold tracking-wide shadow-2 sm:text-xl"
                style={{ color: "#000" }} //#122231
              >
                When I`m not Programming you can find me 👇
              </h1>
              <p
                className="mt-4 text-sm leading-8"
                style={{ color: "#122231" }} //#3d4f60 122231
              >
                🛠️ Sharing my Programming journey and experiences on{" "}
                <Link
                  href="https://github.com/anasyakubu"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  github
                </Link>
              </p>
              <p
                className="mt-4 text-sm leading-8"
                style={{ color: "#122231" }} //#3d4f60 122231
              >
                🎉 having fun with fellow Programmers and students
              </p>
              <p
                className="mt-4 text-sm leading-8"
                style={{ color: "#122231" }} //#3d4f60 122231
              >
                🥷 Watch Animes
              </p>

              <p
                className="mt-4 text-sm leading-8"
                style={{ color: "#122231" }} //#3d4f60 122231
              >
                📄 Also love Watching Documentary
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

export default Hobby;
