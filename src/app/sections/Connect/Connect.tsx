import Link from "next/link";
import React from "react";

const Connect = () => {
  return (
    <div
      className="Connect"
      style={{ backgroundColor: "#fcfcfc", color: "#3d4f60" }}
    >
      <div className="p-10">
        <p
          className="text-md font-extrabold tracking-wide shadow-2 sm:text-xl"
          style={{ color: "#000" }}
        >
          Let`s Connect :)
        </p>
        <div className="mt-5">
          <p className="mt-2">
            <Link
              className="text-black underline"
              href="malto: yakubuanas04@hmail.com"
              target="_blank"
            >
              email
            </Link>
          </p>
          <p className="mt-2">
            <Link
              className="text-black underline"
              href="https://www.linkedin.com/in/anas-yakubu-02a20725a/"
              target="_blank"
            >
              linkedin
            </Link>
          </p>
          <p className="mt-2">
            <Link
              className="text-black underline"
              href="https://github.com/anasyakubu"
              target="_blank"
            >
              github
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connect;
