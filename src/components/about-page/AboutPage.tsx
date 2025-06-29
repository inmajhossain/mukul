import React from "react";
import { Team } from "../body-components/Team";
import AboutHead from "./About-Head";
import { Skill } from "../body-components/Skill";
import { AboutUs } from "./AboutUs";


const AboutPage = () => {
  return (
    <div className="space-y-[100px] mt-[50px]">
      <AboutHead/>
      <AboutUs/>
      <Team />
      <Skill/>
    </div>
  );
};

export default AboutPage;
