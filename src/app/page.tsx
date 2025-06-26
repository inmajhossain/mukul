import { About } from "@/components/body-components/About";
import { Hero } from "@/components/body-components/Hero";
import ServiceTabs from "@/components/body-components/ServiceTabs";
import { Skill } from "@/components/body-components/Skill";
import { Team } from "@/components/body-components/Team";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px] mx-auto text-center custom-container">
      <Hero />
      <About/>
      <Team/>
      <ServiceTabs/>
      <Skill/>
    </div>
  );
}
