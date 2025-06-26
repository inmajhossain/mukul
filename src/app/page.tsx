import { About } from "@/components/body-components/About";
import { Blogs } from "@/components/body-components/Blogs";
import { Hero } from "@/components/body-components/Hero";
import ServiceTabs from "@/components/body-components/ServiceTabs";
import { Skill } from "@/components/body-components/Skill";
import { Team } from "@/components/body-components/Team";
import { Testimonial } from "@/components/body-components/Testimonial";
import Work from "@/components/body-components/Work";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px] mx-auto text-center custom-container">
      <Hero />
      <ServiceTabs />
      <Work />
      <Skill />
      <About />
      <Team />
      <Testimonial />
      <Blogs />
    </div>
  );
}
