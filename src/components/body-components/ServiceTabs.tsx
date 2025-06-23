"use client";
import { useState } from "react";
import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaArrowRight, FaPeace, FaPenToSquare } from "react-icons/fa6";
import Image from "next/image";
import { PiStarFourFill } from "react-icons/pi";

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
 
};

const services: Service[] = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "We develop fast, secure, and scalable websites tailored to your business needs. Using the latest technologies, our team ensures that your website is fully responsive, optimized for performance, and provides a seamless experience across all devices.",
    image: "/images/serviceone.jpg",
  },
  {
    id: 2,
    title: "Website Development",
    description:
      "We build high-performance websites tailored to your business needs, using the latest technologies.",
    image: "/images/serviceone.jpg",
    
  },
  {
    id: 3,
    title: "WordPress Development",
    description:
      "Custom WordPress themes and plugins to meet your business goals with easy content management.",
    image: "/images/serviceone.jpg",
    
  },
  {
    id: 4,
    title: "Website SEO",
    description:
      "Boost your website visibility with our SEO optimization strategies that drive organic traffic.",
    image: "/images/serviceone.jpg",
    
  },
  {
    id: 5,
    title: "Graphic Design",
    description:
      "Stand out with stunning visuals, branding, and graphic content tailored to your identity.",
    image: "/images/serviceone.jpg",
    
  },
];

const ServiceTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
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
                  <PiStarFourFill className="text-primary" /> Our Services
                </motion.h6>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, ease: "easeIn" }}
                  className="medium text-[36px] md:text-[48px]"
                >
                  Our innovative <span className="text-primary">services</span>
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
                  View All Services <FaArrowRight />
                </motion.button>
              </div>
            </div>
            {/* Title Div End */}
            {/* Bottom Div start */}
            <div className="flex flex-col lg:flex-row gap-6 ">
      {/* Left Panel */}
      <div className="flex flex-col gap-4 w-full lg:w-[400px]">
        {services.map((service, index) => (
          <motion.button
            key={service.id}
            onClick={() => setActiveIndex(index)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`flex justify-between items-center px-4 py-3 rounded-lg border text-left text-base font-medium transition-all duration-300 lg:w-[385px] lg:h-[65px]
              ${
                activeIndex === index
                  ? "bg-cyan-500 text-white"
                  : "bg-white border-cyan-400 text-gray-800 hover:text-white hover:bg-primary "
              }`}
          >
            <span>
              {String(service.id).padStart(2, "0")} {service.title}
            </span>
            <FaArrowRight
              className={`transition-colors ${
                activeIndex === index ? "text-white" : "text-cyan-500"
              }`}
            />
          </motion.button>
        ))}
      </div>

      {/* Right Panel */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 "
          >
            <Image
              src={activeService.image}
              alt={activeService.title}
              fill
              className="object-cover lg:w-[800px] lg:h-[400px]"
            />
            <div className="absolute bg-black/30 backdrop-blur-md p-6 rounded-[10px] text-white flex flex-col justify-center md:w-[650px] md:h-[190px] md:bottom-[35px] md:right-[45px] lg:right-[82px] w-[340px] right-[10px] bottom-[10px]">
              <div className="flex items-center gap-3 mb-2">
                <FaPenToSquare className="size-[25px]"/>
                <h2 className="text-xl font-semibold">{activeService.title}</h2>
              </div>
              <p className="text-sm text-left mb-4">{activeService.description}</p>
              <button className="text-cyan-300 font-semibold hover:text-white transition-all flex items-center gap-1">
                Read More <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
            {/* Bottom Div end */}
    </div>
    
  );
};

export default ServiceTabs;
