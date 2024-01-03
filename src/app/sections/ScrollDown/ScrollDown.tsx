import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

const ScrollDown = () => {
  return (
    <div
      className="ScrollDown"
      style={{ backgroundColor: "#fcfcfc", color: "#3d4f60" }}
    >
      <div className="p-20">
        <div className="w-10 h-10 text-center flex justify-center items-center">
          <Link href="/" className="p-5 bg-black text-white rounded-full">
            {" "}
            <FaArrowDown />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScrollDown;
