import { About } from "@/components/body-components/About";
import { Hero } from "@/components/body-components/Hero";
import Innovative from "@/components/body-components/Innovative";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px] mx-auto text-center custom-container">
      <Hero />
      <Innovative />
      <About/>
    </div>
  );
}
