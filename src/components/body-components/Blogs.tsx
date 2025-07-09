"use client";

import { useRef } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// ✅ Blogs Data
const BlogsInfo = [
  {
    src: "/images/blog/blogone.webp",
    title:
      "Latest Web Development Trends in 2025: AI, Web 3.0, PWAs, and Beyond",
    date: "March 8, 2025",
  },
  {
    src: "/images/blog/blogtwo.webp",
    title:
      "Essential WordPress Plugins for Bloggers, Businesses & eCommerce in 2025",
    date: "March 2, 2025",
  },

  {
    src: "/images/blog/blogthree.webp",
    title: "Step-by-Step Guide: How to Rank Higher on Google Like a Pro",
    date: "March 3, 2025",
  },
];

export const Blogs = () => {
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
            <PiStarFourFill className="text-primary" /> Our Blogs
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="text-[36px] md:text-[48px] medium"
          >
            Latest insights & <span className="text-primary">inspiration</span>
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
            View All Blogs <FaArrowRight />
          </motion.button>
        </div>
      </div>
      {/* Title Div End */}

      {/* Bottom Start */}
      <div className="flex md:flex-row flex-col justify-between items-center gap-[20px]">
        {BlogsInfo.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="flex flex-col items-start space-y-[25px] bg-slate-50 shadow-black drop-shadow-[10px] mx-auto p-[25px] border-[1px] border-slate-100 rounded-[20px] w-[360px] md:w-[400px] h-[460px] md:h-[350px] lg:h-[460px] text-center hover:scale-105 transition-all duration-500 ease-in"
          >
            <div className="space-y-[10px] min-h-[345px] md:min-h-[250px] lg:min-h-[345px]">
              <Image
                src={member.src}
                alt={member.title}
                width={290}
                height={330}
                className="border-2 border-primary rounded-[20px] w-[340px] h-[255px] md:h-[150px] lg:h-[255px] object-cover"
              />
              <h5 className="font-bold text-[18px] text-black md:text-[14px] lg:text-[18px] text-left">
                {member.title}
              </h5>
            </div>
            <div className="flex flex-row justify-between items-center py-[15px] border-slate-100 border-t-1 w-full">
              <h5 className="font-semibold text-md md:text-[12px] lg:text-md">
                {member.date}
              </h5>
              <Link
                href={"#"}
                className="flex flex-row justify-between items-center gap-[5px] font-bold text-md text-primary md:text-[12px] lg:text-md"
              >
                Read More <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Bottom End */}
    </div>
  );
};
