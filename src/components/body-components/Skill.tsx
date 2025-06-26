"use client";

import { useRef } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// ✅ Skill Data
const SkillInfo = [
  {
    src: "/images/mukul.jpg",
    skillName: "Frontend Development",
    SkillDetails: "User Interface Design",
  },
    {
    src: "/images/mukul.jpg",
    skillName: "Backend Development",
    SkillDetails: "Server Side Development",
  },
  {
    src: "/images/mukul.jpg",
    skillName: "WordPress Development",
    SkillDetails: "Content Management System",
  },
  
  {
    src: "/images/mukul.jpg",
    skillName: "UI & UX Design",
    SkillDetails: "User-friendly interface design",
  },
  {
    src: "/images/mukul.jpg",
    skillName: "Website SEO",
    SkillDetails: "Search Engine Optimization",
  },
    {
    src: "/images/mukul.jpg",
    skillName: "Graphic Design",
    SkillDetails: "Visual Content Creation",
  },
  {
    src: "/images/mukul.jpg",
    skillName: "Social Media Marketing",
    SkillDetails: "Social Engagement",
  },
  
  {
    src: "/images/mukul.jpg",
    skillName: "Google Ads",
    SkillDetails: "Online Advertising",
  },
  {
    src: "/images/mukul.jpg",
    skillName: "Facebook Ads",
    SkillDetails: "Online Advertising",
  },
    {
    src: "/images/mukul.jpg",
    skillName: "YouTube Video SEO",
    SkillDetails: "Search Engine Optimization",
  },
  {
    src: "/images/mukul.jpg",
    skillName: "Video Editing",
    SkillDetails: "Visual Content Creation",
  },
  
  {
    src: "/images/mukul.jpg",
    skillName: "Email Marketing",
    SkillDetails: "Targeted Campaigns",
  },
  {
    src: "/images/mukul.jpg",
    skillName: "Influence Marketing",
    SkillDetails: "UBrand Strategy",
  },
    {
    src: "/images/mukul.jpg",
    skillName: "Lead Generation",
    SkillDetails: "Customer Acquisition",
  },
  {
    src: "/images/mukul.jpg",
    skillName: "React.js",
    SkillDetails: "Frontend Development",
  },
  
  {
    src: "/images/mukul.jpg",
    skillName: "Next.js",
    SkillDetails: "Frontend Development",
  },
  {
    src: "/images/mukul.jpg",
    skillName: "Node.js",
    SkillDetails: "Backend Development",
  },
    {
    src: "/images/mukul.jpg",
    skillName: "Express.js",
    SkillDetails: "Backend Development",
  },
  {
    src: "/images/mukul.jpg",
    skillName: "MongoDB",
    SkillDetails: "Database Management",
  },
  
  {
    src: "/images/mukul.jpg",
    skillName: "Firebase",
    SkillDetails: "Database Management",
  },
];

export const Skill = () => {
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
            <PiStarFourFill className="text-primary" /> Our Skills
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="medium text-[36px] md:text-[48px]"
          >
            Our skills for <span className="text-primary">innovation</span>
          </motion.h2>
        </div>
        {/* Right */}
        <div>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="hidden lg:flex justify-around items-center bg-primary hover:bg-black px-[10px] rounded-full w-[200px] h-[42px] font-semibold text-white hover:text-white transition-all duration-100"
            aria-label="All Team Members"
          >
            Let's Get Started <FaArrowRight />
          </motion.button>
        </div>
      </div>
      {/* Title Div End */}

      {/* Bottom Start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-y-3 md:gap-y-3">
        {SkillInfo.map((skillInfo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="flex flex-row items-center text-center  bg-slate-100 rounded-[10px] h-[130px] md:h-auto drop-shadow-[20px] shadow-black border-black border-[1px] hover:scale-105 px-[10px] py-[10px] gap-[20px] transition-all duration-500 ease-in  mx-auto w-[360px] lg:w-[298px] "
          >
            <div className="bg-slate-50 hover:bg-slate-200 p-[15px] rounded-[5px]"><Image
              src={skillInfo.src}
              alt={skillInfo.skillName}
              width={290}
              height={330}
              className=" object-cover w-[40px] h-[40px] "
            /></div>
            <div className="space-y-[5px]"><h4 className="text-left text-wrap font-semibold text-[18px] leading-[25px]">{skillInfo.skillName}</h4>
            <p className="text-sm text-left text-wrap text-gray-600 text-[14px] ">{skillInfo.SkillDetails}</p></div>
          </motion.div>
        ))}
      </div>
      {/* Bottom End */}
    </div>
  );
};
