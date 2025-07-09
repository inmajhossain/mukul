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
    src: "/images/ronju.jpeg",
    name: "Md. Ronju Miah",
    position: "Wordpress Developer",
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
            <PiStarFourFill className="text-primary" /> Our Team
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="text-[36px] md:text-[48px] medium"
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
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {EmployerInfo.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="flex flex-col items-center bg-slate-50 shadow-black drop-shadow-[20px] mx-auto border-[1px] border-black rounded-[20px] w-[230px] h-[350px] text-center hover:scale-105 transition-all duration-500 ease-in"
          >
            <Image
              src={member.src}
              alt={member.name}
              width={290}
              height={330}
              className="rounded-t-[20px] w-[230px] h-[250px] object-cover"
            />
            <h4 className="mt-[15px] font-semibold text-lg">{member.name}</h4>
            <p className="text-gray-600 text-sm">{member.position}</p>
          </motion.div>
        ))}
      </div>
      {/* Bottom End */}
    </div>
  );
};
