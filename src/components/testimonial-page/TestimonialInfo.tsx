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
    src: "/images/testimonials/testimonialone.webp",
    name: "Arlene McCoy",
    position: "Co Founder",
  },
  {
    comment:
      "Their UI/UX design expertise transformed our platform, making it visually appealing, intuitive, and highly engaging for our users.",
    src: "/images/testimonials/testimonialthree.webp",
    name: "Esther Howard",
    position: "Director",
  },
  {
    comment:
      "With SoftNora’s website SEO strategies, our search rankings improved significantly, driving more organic traffic and boosting conversions.",
    src: "/images/testimonials/testimonialtwo.webp",
    name: "Cameron Williamson",
    position: "CEO",
  },
  {
    comment:
      "SoftNora’s graphic design services enhanced our brand identity with stunning visuals, making our marketing materials more impactful.",
    src: "/images/testimonials/testimonialfour.webp",
    name: "Eleanor Penan",
    position: "Marketing Manager",
  },
  {
    comment:
      "Their social media marketing expertise helped us increase engagement, grow our audience, and improve our online brand presence.",
    src: "/images/testimonials/testimonialfive.webp",
    name: "Robert Fox",
    position: "Product Manager",
  },
  {
    comment:
      "SoftNora optimized our YouTube videos for SEO, boosting visibility, increasing watch time, and driving more subscribers effortlessly.",
    src: "/images/testimonials/testimonialsix.webp",
    name: "Kristin Watson",
    position: "Startup Founder",
  },
];

export const TestimonialInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col gap-[40px] container-new">
      

      {/* Bottom Start */}
      <div className="flex md:flex-row flex-col flex-wrap justify-between items-center gap-[20px]">
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
