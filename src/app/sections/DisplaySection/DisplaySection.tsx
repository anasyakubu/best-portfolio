import DisplayCom from "@/app/components/DisplayCom/DisplayCom";
import React from "react";
import "./DisplaySection.scss";

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
          <DisplayCom />
          <DisplayCom />
          <DisplayCom />
          <DisplayCom />
        </div>
      </div>
    </div>
  );
};

export default displaySection;
