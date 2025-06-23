"use client";

import { useRef } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// ✅ Employer Data
const EmployerInfo = [
  {
    src: "/images/mukul.jpg",
    name: "Mukul Ahmed",
    position: "Wordpress Developer",
  },
    {
    src: "/images/inmaj.webp",
    name: "Inmaj Hossain Shahin",
    position: "Next.js Frontend Web Developer",
  },
  {
    src: "/images/jim.jpg",
    name: "Jim Rahman",
    position: "Full-Stack Web Developer",
  },
  
  {
    src: "/images/lipu.jpg",
    name: "Mohiduzzaman Lipu",
    position: "Vue.js Web Application Developer",
  },
];

export const Team = () => {
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
            <PiStarFourFill className="text-primary" /> Our Team
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="medium text-[36px] md:text-[48px]"
          >
            The Minds Behind the <span className="text-primary">Magic</span>
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
            All Team Members <FaArrowRight />
          </motion.button>
        </div>
      </div>
      {/* Title Div End */}

      {/* Bottom Start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {EmployerInfo.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="flex flex-col items-center text-center  bg-slate-50 rounded-[20px] h-[410px] drop-shadow-[20px] shadow-black border-black border-[1px] hover:scale-105 transition-all duration-500 ease-in w-[290px] mx-auto "
          >
            <Image
              src={member.src}
              alt={member.name}
              width={290}
              height={330}
              className="rounded-t-[20px] object-cover w-[290px] h-[330px] "
            />
            <h4 className="font-semibold text-lg mt-[15px]">{member.name}</h4>
            <p className="text-sm text-gray-600 ">{member.position}</p>
          </motion.div>
        ))}
      </div>
      {/* Bottom End */}
    </div>
  );
};
