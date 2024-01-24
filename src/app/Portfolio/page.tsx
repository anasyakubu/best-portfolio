import PortfolioHeader from "@/app/sections/PortfolioHeader/PortfolioHeader";
import React from "react";
import DisplayPortfolio from "../sections/DisplayPortfolio/DisplayPortfolio";

const page = () => {
  return (
    <div>
      <PortfolioHeader />
      <DisplayPortfolio />
    </div>
  );
};

export default page;
