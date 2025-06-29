import React from "react";
import { About } from "../body-components/About";
import { Team } from "../body-components/Team";
import SkillsHead from "./Skills-Head";
import { Skills } from "./Skills";


const SkillsPage = () => {
  return (
    <div className="space-y-[100px] mt-[50px]">
      <SkillsHead/>
      <Skills/>
      <About />
      <Team />
    </div>
  );
};

export default SkillsPage;
