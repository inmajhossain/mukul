import React from "react";
import { Skill } from "../body-components/Skill";
import { About } from "../body-components/About";
import { Team } from "../body-components/Team";
import PortfolioHead from "./PortfolioHead";
import PortfolioWork from "./PortfolioWork";


const Portfolio = () => {
  return (
    <div className="space-y-[100px] mt-[50px]">
      <PortfolioHead/>
      <PortfolioWork/>
      <Skill />
      <Team />
    </div>
  );
};

export default Portfolio;
