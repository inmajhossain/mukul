"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

const ServiceHead = () => {
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="bg-slate-100 mx-auto rounded-[25px] w-[350px] md:w-[700px] lg:w-[1480px] h-[100px] md:h-[200px] lg:h-[300px]">
     
    <motion.div ref={ref} initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeIn" }} className="flex flex-col justify-center items-center py-[25px] md:py-[60px] lg:py-[80px]">
     <h2 className="font-extrabold text-[20px] md:text-[36px] lg:text-[60px]">Explore Our <span className="text-primary">Services</span></h2>
     <h3 className="font-bold text-[16px] text-slate-600">Home / Services</h3>
    </motion.div>
    </div>
  );
};

export default ServiceHead;
