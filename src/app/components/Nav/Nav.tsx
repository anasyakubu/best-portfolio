import Link from "next/link";
import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="Pages/Resume">Resume</Link>
              </li>
              <li>
                <Link href="Pages/About">About</Link>
              </li>
              <li>
                <Link href="Pages/Portfolio">Portfolio</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-wide shadow-2 sm:text-3xl text-black"
          >
            Anas Yakubu
          </Link>
        </div>
        <div className="navbar-end">
          <Link
            href="https://www.linkedin.com/in/anas-yakubu-02a20725a/"
            className="btn btn-ghost btn-circle"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.instagram.com/anass.developer/"
            className="btn btn-ghost btn-circle"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
