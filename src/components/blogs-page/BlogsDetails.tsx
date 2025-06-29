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

export const BlogsDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col gap-[40px] container-new">
      

      {/* Bottom Start */}
      <div className="flex md:flex-row flex-col md:flex-wrap lg:flex-nowrap justify-between items-center gap-[20px]">
        {BlogsInfo.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="flex flex-col items-start space-y-[25px] bg-slate-50 shadow-black drop-shadow-[10px] mx-auto p-[25px] border-[1px] border-slate-100 rounded-[20px] w-[360px] md:w-[400px] h-[460px] text-center hover:scale-105 transition-all duration-500 ease-in"
          >
            <div className="space-y-[10px] min-h-[345px]">
              <Image
                src={member.src}
                alt={member.title}
                width={290}
                height={330}
                className="border-2 border-primary rounded-[20px] w-[340px] h-[255px] object-cover"
              />
              <h5 className="font-bold text-[18px] text-black text-left">
                {member.title}
              </h5>
            </div>
            <div className="flex flex-row justify-between items-center py-[15px] border-slate-100 border-t-1 w-full">
              <h5 className="font-semibold text-md">{member.date}</h5>
              <Link
                href={"#"}
                className="flex flex-row justify-between items-center gap-[5px] font-bold text-md text-primary"
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
