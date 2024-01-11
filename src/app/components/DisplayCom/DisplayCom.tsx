import Image from "next/image";
import React from "react";
import Link from "next/link";
import "./DisplayCom.scss";
import NYMApp from "../../../../public/NYMApp.png";
import AI from "../../../../public/AI.png";
import MGC from "../../../../public/MGC.png";
import NewsApp from "../../../../public/NewsApp.png";

interface displayProps {
  displayImg: any;
  tittle: string;
  links: any;
  text: string;
}

const DisplayCom = (props: displayProps) => {
  const { displayImg, tittle, links, text } = props;
  return (
    <div className="DisplayCom p-3 m-1">
      <div
        className="Cont"
        style={{
          // backgroundColor: "#f2f8fc",
          // color: "#3d4f60",
          borderBlockColor: "#122231",
          border: "1px solid",
          borderRadius: "10px",
        }}
      >
        <div className="p-5 ImgSection">
          <Link href={links} target="_blank">
            <Image
              className="Img rounded-md"
              src={displayImg}
              alt="Display Image"
            />
          </Link>
        </div>
      </div>
      <div className="mt-3">
        <h6 className="text-xl font-medium text-black">{tittle}</h6>
        <p
          className="text-sm leading-8 mt-2"
          style={{ color: "#122231" }} //#3d4f60 122231
        >
          {text}
        </p>
        <div className="mt-5">
          {/* <Link
            href={links}
            target="_blank"
            className="text-gray-900  font-medium underline"
          >
            Learn More
          </Link> */}
          <Link
            href={links}
            target="_blank"
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Button Text
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayCom;
