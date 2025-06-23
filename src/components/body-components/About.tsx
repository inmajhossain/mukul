"use client";

import { useRef } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import ak11 from "@/images/hero.jpeg";
import { motion, useInView } from "framer-motion";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="container-new flex flex-col gap-[40px]">
      {/* Title Div Start */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left */}
        <div className="space-y-[10px] text-left">
          <motion.h6
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="font-semibold flex flex-row items-center gap-[5px]"
          >
            <PiStarFourFill className="text-primary" /> About Us
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="medium text-[36px] md:text-[48px]"
          >
            A Team of <span className="text-primary">creative thinkers</span>
          </motion.h2>
        </div>
        {/* Right */}
        <div>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="hidden lg:flex justify-around items-center bg-primary hover:bg-black px-[10px] rounded-full w-[150px] h-[42px] font-semibold text-white hover:text-white transition-all duration-100"
            aria-label="Contact Me"
          >
            Contact Me <FaArrowRight />
          </motion.button>
        </div>
      </div>
      {/* Title Div End */}

      {/* Bottom Start */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-[100px]">
        {/* Left */}
        <motion.div initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeIn" }} className="flex flex-col items-start text-left md:w-[730px]">
          <h4 className="text-[16px] lg:text-[20px] text-left md:max-w-[700px] leading-[28px] lg:max-w-[540px] text-slate-500">
            We specialize in delivering innovative and impactful Web design &amp;
            development and digital marketing solutions that elevate brands and
            drive results. From digital experiences to print media, our team of
            creative professionals transforms ideas into compelling visual
            stories. Focused on creativity, strategy, and client collaboration.
          </h4>
          <div className="mt-[40px] flex-row flex items-center gap-[60px]">
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
            className="w-[350px] h-[240px] md:w-[520px] md:h-[380px] rounded-[8px] drop-shadow-black shadow-xl bg-cover object-cover"
          />
        </motion.div>
      </div>
      {/* Bottom End */}
    </div>
  );
};
