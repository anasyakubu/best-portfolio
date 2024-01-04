import DisplayCom from "@/app/components/DisplayCom/DisplayCom";
import React from "react";
import "./DisplaySection.scss";
import NYMApp from "../../../../public/NYMApp.png";
import AI from "../../../../public/AI.png";
import MGC from "../../../../public/MGC.png";
import NewsApp from "../../../../public/NewsApp.png";

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
          />
          <DisplayCom
            displayImg={AI}
            tittle="AI Chat Bot"
            links="https://foc-ai.vercel.app/"
          />
          <DisplayCom
            displayImg={MGC}
            tittle="My Grade Card Website"
            links="https://mygradecard.com/home/"
          />
          <DisplayCom
            displayImg={NewsApp}
            tittle="News App"
            links="https://news360-three.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default displaySection;
