"use client";

import { useRef } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// ✅ Skill Data
const SkillInfo = [
  {
    src: "/images/skill/frontend.webp",
    skillName: "Frontend Development",
    SkillDetails: "User Interface Design",
  },
  {
    src: "/images/skill/backend.webp",
    skillName: "Backend Development",
    SkillDetails: "Server Side Development",
  },
  {
    src: "/images/skill/wordpress.webp",
    skillName: "WordPress Development",
    SkillDetails: "Content Management System",
  },

  {
    src: "/images/skill/figma.webp",
    skillName: "UI & UX Design",
    SkillDetails: "User-friendly interface design",
  },
  {
    src: "/images/skill/seo.webp",
    skillName: "Website SEO",
    SkillDetails: "Search Engine Optimization",
  },
  {
    src: "/images/skill/graphics.webp",
    skillName: "Graphic Design",
    SkillDetails: "Visual Content Creation",
  },
  {
    src: "/images/skill/socialmediamarketing.webp",
    skillName: "Social Media Marketing",
    SkillDetails: "Social Engagement",
  },

  {
    src: "/images/skill/googleadd.webp",
    skillName: "Google Ads",
    SkillDetails: "Online Advertising",
  },
  {
    src: "/images/skill/facebook.webp",
    skillName: "Facebook Ads",
    SkillDetails: "Online Advertising",
  },
  {
    src: "/images/skill/youtube.webp",
    skillName: "YouTube Video SEO",
    SkillDetails: "Search Engine Optimization",
  },
  {
    src: "/images/skill/videoediting.webp",
    skillName: "Video Editing",
    SkillDetails: "Visual Content Creation",
  },

  {
    src: "/images/skill/influence.webp",
    skillName: "Email Marketing",
    SkillDetails: "Targeted Campaigns",
  },
  {
    src: "/images/skill/influence.webp",
    skillName: "Influence Marketing",
    SkillDetails: "UBrand Strategy",
  },
  {
    src: "/images/skill/lead.webp",
    skillName: "Lead Generation",
    SkillDetails: "Customer Acquisition",
  },
  {
    src: "/images/skill/react.webp",
    skillName: "React.js",
    SkillDetails: "Frontend Development",
  },

  {
    src: "/images/skill/nextjs.webp",
    skillName: "Next.js",
    SkillDetails: "Frontend Development",
  },
  {
    src: "/images/skill/nodejs.webp",
    skillName: "Node.js",
    SkillDetails: "Backend Development",
  },
  {
    src: "/images/skill/express.webp",
    skillName: "Express.js",
    SkillDetails: "Backend Development",
  },
  {
    src: "/images/skill/mongodb.webp",
    skillName: "MongoDB",
    SkillDetails: "Database Management",
  },

  {
    src: "/images/skill/firebase.webp",
    skillName: "Firebase",
    SkillDetails: "Database Management",
  },
];

export const Skill = () => {
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
            <PiStarFourFill className="text-primary" /> Our Skills
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="text-[36px] md:text-[48px] medium"
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
      <div className="gap-2 md:gap-y-3 lg:gap-y-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {SkillInfo.map((skillInfo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="flex flex-row items-center gap-[20px] bg-slate-100 shadow-black drop-shadow-[20px] mx-auto px-[10px] py-[10px] border-[1px] border-black rounded-[10px] w-[360px] md:max-w-[360px] lg:max-w-[298px] h-[130px] md:h-auto text-center hover:scale-105 transition-all duration-500 ease-in"
          >
            <div className="bg-slate-50 hover:bg-slate-200 p-[10px] rounded-[5px]">
              <Image
                src={skillInfo.src}
                alt={skillInfo.skillName}
                width={290}
                height={330}
                className="p-[2px] w-[40px] h-[40px] object-cover"
              />
            </div>
            <div className="space-y-[5px]">
              <h4 className="font-semibold text-[18px] text-left text-wrap leading-[25px]">
                {skillInfo.skillName}
              </h4>
              <p className="text-[14px] text-gray-600 text-sm text-left text-wrap">
                {skillInfo.SkillDetails}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Bottom End */}
    </div>
  );
};
