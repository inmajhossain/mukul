"use client";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="bg-[url(/images/hero.jpeg)] bg-cover bg-no-repeat bg-center mt-[-80px] lg:mt-[-40px] md:w-full lg:w-screen h-screen object-bottom object-cover">
      <div className="bg-[#656565]/60 h-screen">
        <div className="flex flex-col justify-around items-start space-y-[25px] px-[40px] lg:px-[150px] py-[220px] font-bold text-white text-left">
          <motion.h1
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="w-[250px] md:w-[350px] lg:w-[765px] font-bold text-[30px] md:text-[40px] lg:text-[60px]"
          >
            Where{" "}
            <span className="bg-primary px-[10px] py-[8px] rounded-[5px]">
              creativity
            </span>{" "}
            meets strategy
          </motion.h1>
          <motion.h4
            animate={{ opacity: [0, 1], y: [70, 0] }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="w-[290px] md:w-[600px] lg:w-[730px] font-bold text-[18px]"
          >
            We’re a web development and digital marketing agency specializing in
            building high-performance websites, crafting effective marketing
            strategies, and enhancing brand visibility to drive business growth.
          </motion.h4>
          <motion.button
            animate={{ opacity: [0, 1], scale: [0, 1] }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="flex justify-around items-center bg-primary hover:bg-black px-[10px] rounded-full w-[230px] h-[50px] font-semibold text-white hover:text-white transition-all duration-100"
          >
            View Our Portfolio{" "}
            <div>
              <FaArrowRight />
            </div>
            {/* Button */}
          </motion.button>
        </div>
      </div>
    </div>
  );
};
