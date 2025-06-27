import React from "react";
import ServiceTabs from "../body-components/ServiceTabs";
import { Skill } from "../body-components/Skill";
import { About } from "../body-components/About";
import { Team } from "../body-components/Team";

const ServicePage = () => {
  return (
    <div className="space-y-[100px] mt-[50px]">
      <ServiceTabs />
      <Skill />
      <About />
      <Team />
    </div>
  );
};

export default ServicePage;
