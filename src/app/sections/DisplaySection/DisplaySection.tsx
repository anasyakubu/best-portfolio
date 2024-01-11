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
            text="A news app is a software application designed for mobile devices, tablets, or computers that aggregates and presents news content"
          />
        </div>
        <div className="mt-5">
          <Link
            href="/"
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default displaySection;
