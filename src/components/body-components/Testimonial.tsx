"use client";

import { useRef } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// ✅ Employer Data
const CommentInfo = [
  {
    comment:
      "SoftNora provided outstanding web development services, delivering a fast, responsive, and user-friendly website that exceeded our expectations.",
    src: "/images/jim.jpg",
    name: "Arlene McCoy",
    position: "Co Founder",
  },
  {
    comment:
      "Their UI/UX design expertise transformed our platform, making it visually appealing, intuitive, and highly engaging for our users.",
    src: "/images/inmaj.webp",
    name: "Esther Howard",
    position: "Director",
  },
  {
    comment:
      "With SoftNora’s website SEO strategies, our search rankings improved significantly, driving more organic traffic and boosting conversions.",
    src: "/images/lipu.jpg",
    name: "Cameron Williamson",
    position: "CEO",
  },
];

export const Testimonial = () => {
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
            <PiStarFourFill className="text-primary" /> Our Testimonials
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="text-[36px] md:text-[48px] medium"
          >
            Hear from our <span className="text-primary">happy clients</span>
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
            All Testimonials <FaArrowRight />
          </motion.button>
        </div>
      </div>
      {/* Title Div End */}

      {/* Bottom Start */}
      <div className="flex md:flex-row flex-col justify-between items-center gap-[20px]">
        {CommentInfo.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="flex flex-col items-start space-y-[25px] bg-slate-50 shadow-black drop-shadow-[10px] mx-auto p-[20px] border-[1px] border-slate-100 rounded-[20px] w-[350px] md:w-[380px] h-[295px] md:h-[270px] text-center hover:scale-105 transition-all duration-500 ease-in"
          >
            <h4 className="flex flex-row justify-around items-center gap-[1px] text-primary">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </h4>
            <h5 className="font-bold text-[16px] text-gray-600 text-left">
              {member.comment}
            </h5>
            <div className="flex flex-row justify-between items-center py-[15px] border-slate-300 border-t-3 w-full">
              <div className="">
                <Image
                  src={member.src}
                  alt={member.name}
                  width={290}
                  height={330}
                  className="border-2 border-primary rounded-full w-[50px] h-[50px] object-cover"
                />
              </div>
              <div className="w-[230px] md:w-[260px]">
                <h4 className="font-semibold text-lg text-left">
                  {member.name}
                </h4>
                <p className="font-bold text-gray-600 text-sm text-left">
                  {member.position}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Bottom End */}
    </div>
  );
};
