import { About } from "@/components/body-components/About";
import { Hero } from "@/components/body-components/Hero";
import Innovative from "@/components/body-components/Innovative";
import ServiceTabs from "@/components/body-components/ServiceTabs";
import { Team } from "@/components/body-components/Team";


export default function Home() {
  return (
    <div className="flex flex-col gap-[100px] mx-auto text-center custom-container">
      <Hero />
      {/* <Innovative /> */}
      <About/>
      <Team/>
      <ServiceTabs/>
    </div>
  );
}
