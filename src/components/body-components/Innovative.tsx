"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { PiStarFourBold } from "react-icons/pi";

const Innovative = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers only once when in view

  return (
    <div className="container-new" ref={ref}>
      {/* Top Start */}
      <div className="flex lg:flex-row flex-col justify-between items-start lg:items-center gap-[10px] lg:gap-0">
        {/* Left Side */}
        <div className="flex flex-col items-start gap-[10px]">
          <motion.h6
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="flex justify-around items-center gap-[10px] font-semibold"
          >
            <PiStarFourBold className="size-[20px] text-primary" /> Our Services
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="w-[250px] md:w-full font-medium text-[30px] md:text-[36px] lg:text-[48px] text-left"
          >
            Our innovative <span className="text-primary">services</span>
          </motion.h2>
        </div>
        {/* Right Side */}
        <div>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="flex justify-around items-center bg-primary hover:bg-black px-[10px] rounded-full w-[230px] h-[50px] font-semibold text-white hover:text-white transition-all duration-100"
          >
            View All Services{" "}
            <div>
              <FaArrowRight />
            </div>
            {/* Button */}
          </motion.button>
        </div>
      </div>
      {/* Top End */}
      {/* Bottom Start */}
      <div>
        {/* Left Side */}
        <div>
          {/* One */}
          {/* Two */}
          {/* Three */}
          {/* Four */}
          {/* Five */}
        </div>
        {/* Right Side */}
        <div></div>
      </div>
      {/* Bottom End */}
    </div>
  );
};

export default Innovative;

// const number = [1, 2, 3, 4, 5];
// const answer = number.find(function (value) {
//   if (value >= 3) {
//     return true;
//   }
// });

// console.log(answer);
