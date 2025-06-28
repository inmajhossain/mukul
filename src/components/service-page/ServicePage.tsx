import React from "react";
import { Skill } from "../body-components/Skill";
import { About } from "../body-components/About";
import { Team } from "../body-components/Team";
import ServiceHead from "./ServiceHead";
import { ServiceInfo } from "./ServiceInfo";

const ServicePage = () => {
  return (
    <div className="space-y-[100px] mt-[50px]">
      <ServiceHead/>
      <ServiceInfo/>
      <Skill />
      <About />
      <Team />
    </div>
  );
};

export default ServicePage;
