"use client";

import { useRef } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import ak11 from "@/images/hero.jpeg";
import { motion, useInView } from "framer-motion";

export const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col gap-[40px] container-new">
      {/* Title Div Start */}
      <div className="flex md:flex-row flex-col justify-between items-center">
        {/* Left */}
        <div className="space-y-[10px] text-left">
          <motion.h6
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="flex flex-row items-center gap-[5px] font-semibold"
          >
            <PiStarFourFill className="text-primary" /> About Us
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="text-[36px] md:text-[48px] medium"
          >
            A Team of <span className="text-primary">creative thinkers</span>
          </motion.h2>
        </div>
        
      </div>
      {/* Title Div End */}

      {/* Bottom Start */}
      <div className="flex lg:flex-row flex-col lg:justify-between items-center gap-[100px]">
        {/* Left */}
        <motion.div initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeIn" }} className="flex flex-col items-start md:w-[730px] text-left">
          <h4 className="md:max-w-[700px] lg:max-w-[540px] text-[16px] text-slate-500 lg:text-[20px] text-left leading-[28px]">
            We specialize in delivering innovative and impactful Web design &amp;
            development and digital marketing solutions that elevate brands and
            drive results. From digital experiences to print media, our team of
            creative professionals transforms ideas into compelling visual
            stories. Focused on creativity, strategy, and client collaboration.
          </h4>
          <div className="flex flex-row items-center gap-[60px] mt-[40px]">
            <div className="text-left">
              <h3 className="font-bold">180+</h3>
              <h6 className="font-medium text-slate-500">Project Completed</h6>
            </div>
            <div className="text-left">
              <h3 className="font-bold">3+</h3>
              <h6 className="font-medium text-slate-500">Years of Experience</h6>
            </div>
            <div className="text-left">
              <h3 className="font-bold">95%</h3>
              <h6 className="font-medium text-slate-500">Client Satisfaction</h6>
            </div>
          </div>
        </motion.div>
        {/* Right */}
        <motion.div initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}>
          <Image
            src={ak11}
            alt="About Us team or creative thinkers"
            width={600}
            height={500}
            className="bg-cover shadow-xl drop-shadow-black rounded-[8px] w-[350px] md:w-[520px] h-[240px] md:h-[380px] object-cover"
          />
        </motion.div>
      </div>
      {/* Bottom End */}
    </div>
  );
};
