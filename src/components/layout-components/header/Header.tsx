"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { FaArrowRight, FaBars } from "react-icons/fa6";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="relative flex justify-between items-center bg-white w-full h-[64px]">
      <div className="flex flex-row justify-between items-center w-full container-new">
        {/* Name */}
        <h3 className="font-lobster font-semi-bold text-primary hover:text-black transition-all duration-100 ease-in-out">
          Mukul Ahmed
        </h3>
        {/* <h3
          className="bg-clip-text font-lobster font-semibold text-[24px] text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #ff7f00,  #4b0082, #ff7f00, #4b0082, #9400d3, #ff7f00,)",
            backgroundSize: "800% 800%",
            animation: "rainbow 8s linear infinite",
          }}
        >
          Mukul Ahmed
        </h3>

        <style jsx global>{`
          @keyframes rainbow {
            0% {
              background-position: 0%;
            }
            100% {
              background-position: 100%;
            }
          }
        `}</style> */}
        {/* Navigarion */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <button className="hidden lg:flex justify-around items-center bg-primary hover:bg-black px-[10px] rounded-full w-[150px] h-[42px] font-semibold text-white hover:text-white transition-all duration-100">
          Contact Me{" "}
          <div>
            <FaArrowRight />
          </div>
          {/* Button */}
        </button>

        {/* For Small Device */}
        <FaBars
          className="lg:hidden border-2 border-primary rounded-[3px] size-[30px] text-primary cursor-pointer"
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === "Enter" || e.key === " ") toggleNav();
          }}
        />
      </div>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ translateY: -20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: -20, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            ref={navRef}
            className="lg:hidden top-[52px] right-[15px] absolute flex flex-col justify-around items-center space-y-[15px] bg-primary p-[15px] rounded-[10px] w-[190px] font-bold text-[16px] text-white"
          >
            <Link href="/" className="group relative w-full">
              <span className="block group-hover:bg-black px-3 py-1 rounded group-hover:text-white group-hover:scale-110 transition duration-300 ease-in-out transform">
                Home
              </span>
            </Link>
            <Link href="/service" className="group relative w-full">
              <span className="block group-hover:bg-black px-3 py-1 rounded group-hover:text-white group-hover:scale-110 transition duration-300 ease-in-out transform">
                Service
              </span>
            </Link>
            <Link href="/portfolio" className="group relative w-full">
              <span className="block group-hover:bg-black px-3 py-1 rounded group-hover:text-white group-hover:scale-110 transition duration-300 ease-in-out transform">
                Portfolio
              </span>
            </Link>
            <Link href="/skills" className="group relative w-full">
              <span className="block group-hover:bg-black px-3 py-1 rounded group-hover:text-white group-hover:scale-110 transition duration-300 ease-in-out transform">
                Skills
              </span>
            </Link>
            <Link href="/about" className="group relative w-full">
              <span className="block group-hover:bg-black px-3 py-1 rounded group-hover:text-white group-hover:scale-110 transition duration-300 ease-in-out transform">
                About Me
              </span>
            </Link>
            <Link href="/testimonials" className="group relative w-full">
              <span className="block group-hover:bg-black px-3 py-1 rounded group-hover:text-white group-hover:scale-110 transition duration-300 ease-in-out transform">
                Testimonials
              </span>
            </Link>
            <Link href="/blogs" className="group relative w-full">
              <span className="block group-hover:bg-black px-3 py-1 rounded group-hover:text-white group-hover:scale-110 transition duration-300 ease-in-out transform">
                Blogs
              </span>
            </Link>
            <button className="flex justify-around items-center bg-white px-[10px] rounded-full w-[150px] h-[42px] font-semibold text-black hover:scale-110 transition-transform duration-300 ease-in-out">
              Contact Me{" "}
              <div>
                <FaArrowRight />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
