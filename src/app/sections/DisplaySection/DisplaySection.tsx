import DisplayCom from "@/app/components/DisplayCom/DisplayCom";
import React from "react";
import "./DisplaySection.scss";
import NYMApp from "../../../../public/NYMApp.png";
import AI from "../../../../public/AI.png";
import MGC from "../../../../public/MGC.png";
import NewsApp from "../../../../public/NewsApp.png";
import Link from "next/link";

const displaySection = () => {
  return (
    <div
      className="displaySection"
      style={{ backgroundColor: "#fcfcfc", color: "#3d4f60" }}
    >
      <div className="p-10">
        <div className="mt-5 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* <div className="Right">1</div>
          <div className="Left">2</div> */}
          <DisplayCom
            displayImg={NYMApp}
            tittle="NYM Website"
            links="https://this-is-nym.vercel.app/"
            text="A Software Technology Company who provides advance and modern technology to it's clients "
          />
          <DisplayCom
            displayImg={AI}
            tittle="AI Chat Bot"
            links="https://foc-ai.vercel.app/"
            text="AI Chat Bot for school projects.. My AI helps in notes simplification assignment making and many more"
          />
          <DisplayCom
            displayImg={MGC}
            tittle="My Grade Card Website"
            links="https://mygradecard.com/home/"
            text="A school Management software.. "
          />
          <DisplayCom
            displayImg={NewsApp}
            tittle="News App"
            links="https://news360-three.vercel.app/"
            text="A news app is a software application designed for mobile devices, tablets, or computers that aggregates and presents news content from various sources in a user-friendly and accessible format."
          />
        </div>
        <div className="mt-5">
          {/* <Link
            href="/"
            className="bg-transparent text-gray-900 font-semibold border text-sm p-2  rounded-sm border-black flex justify-center items-center w-64"
          >
            View All Projects
          </Link> */}
          <Link
            href="/"
            className="bg-transparent pl-5 pr-5 text-gray-900 font-medium border text-sm p-2 rounded-sm border-black"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default displaySection;
