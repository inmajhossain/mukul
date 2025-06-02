"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";
import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function FooterInfo() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // allow re-trigger
    threshold: 0.3, // trigger when 50% in view
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0 });
    }
  }, [inView, controls]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: -2 }}
      animate={controls}
      transition={{
        duration: 1,
        ease: "easeIn",
      }}
      className="flex flex-col justify-between items-center space-y-[25px] container-new"
    >
      {/* Top Start */}
      <div>
        <h2 className="font-bold text-[30px] text-white lg:text-[60px] hover:text-black transition-all duration-1000 ease-in-out">
          LET'S CONNECT
        </h2>
      </div>
      {/* Top End */}
      {/* Middle Start */}
      <div className="flex lg:flex-row flex-col md:flex-col justify-between items-start md:items-center gap-[50px] container-new">
        {/* Left Side Start */}
        <div className="flex md:flex-row flex-col justify-between items-start gap-[50px] md:w-[500px] lg:h-[260px]">
          {/* One */}
          <div className="flex flex-col justify-between items-start space-y-[10px] w-[280px]">
            <h2 className="font-lobster font-medium text-white">Mukul Ahmed</h2>
            <h5 className="text-white hover:text-black transition-all duration-1000 ease-in-out">
              SoftNora’s creativity and expertise go beyond expectations. Our
              web development and marketing solutions elevate brands, delivering
              impactful results that speak for themselves.
            </h5>
          </div>
          {/* Two */}
          <div className="flex flex-col justify-between items-start space-y-[10px] text-white">
            <h3>Quick Links</h3>
            <Link
              href="/"
              className="hover:text-black transition-all duration-1000 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/service"
              className="hover:text-black transition-all duration-1000 ease-in-out"
            >
              Service
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-black transition-all duration-1000 ease-in-out"
            >
              Portfolio
            </Link>
            <Link
              href="/skills"
              className="hover:text-black transition-all duration-1000 ease-in-out"
            >
              Skills
            </Link>
            <Link
              href="/about"
              className="hover:text-black transition-all duration-1000 ease-in-out"
            >
              About Me
            </Link>
            <Link
              href="/testimonials"
              className="hover:text-black transition-all duration-1000 ease-in-out"
            >
              Testimonials
            </Link>
            <Link
              href="/blogs"
              className="hover:text-black transition-all duration-1000 ease-in-out"
            >
              Blogs
            </Link>
          </div>
        </div>
        {/* Left Side End */}
        {/* Right Side Start */}
        <div className="flex md:flex-row lg:flex-row flex-col justify-between items-start gap-[50px] md:w-[500px] lg:h-[260px]">
          {/* One */}
          <div className="flex flex-col justify-between items-start space-y-[10px] text-white">
            <h3>My Services</h3>
            <Link
              href="/#"
              className="hover:text-black transition-all duration-1000 ease-in-out"
            >
              UI/UX Design
            </Link>
            <Link
              href="/#"
              className="hover:text-black transition-all duration-1000 ease-in-out"
            >
              Website Development
            </Link>
            <Link
              href="/#"
              className="hover:text-black transition-all duration-1000 ease-in-out"
            >
              Website SEO
            </Link>
            <Link
              href="/#"
              className="hover:text-black transition-all duration-1000 ease-in-out"
            >
              WordPress Development
            </Link>
            <Link
              href="/#"
              className="hover:text-black transition-all duration-1000 ease-in-out"
            >
              Nextjs Website
            </Link>
          </div>
          {/* Two */}
          <div className="flex flex-col justify-between items-start space-y-[10px] text-white">
            <h3>Contact Info</h3>
            <Link
              href="tel:+8801708517968"
              className="flex items-center gap-[5px] hover:text-black transition-all duration-1000 ease-in-out"
            >
              <FaWhatsapp className="text-[24px]" /> +8801515212670
            </Link>
            <Link
              href="mailto:inmaj670@gmail.com"
              className="flex items-center gap-[5px] hover:text-black transition-all duration-1000 ease-in-out"
            >
              <FiMail className="text-[24px]" /> inmaj670@gmail.com
            </Link>
            {/* Social Icons */}
            <div className="flex flex-row justify-around items-center gap-[10px]">
              <Link
                href="https://www.facebook.com/inmajhossain"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-all duration-1000 ease-in-out"
                aria-label="Facebook"
              >
                <FaFacebook className="text-[40px]" />
              </Link>
              <Link
                href="https://twitter.com/inmajhossain"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-all duration-1000 ease-in-out"
                aria-label="Twitter"
              >
                <FaTwitter className="text-[40px]" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/inmajhossain"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-all duration-1000 ease-in-out"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-[40px]" />
              </Link>
              <Link
                href="https://www.instagram.com/inmajhossain"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-all duration-1000 ease-in-out"
                aria-label="Instagram"
              >
                <FaInstagram className="text-[40px]" />
              </Link>
            </div>
          </div>
        </div>
        {/* Right Side End */}
      </div>
      {/* Middle End */}
      {/* Bottom Start */}
      <div className="py-[5px] border-white border-t-2 w-full">
        <h4 className="text-[14px] text-white md:text-[18px] hover:text-black text-center transition-all duration-1000 ease-in-out">
          © 2025 Inmaj Hossain. All Rights Reserved.
        </h4>
      </div>
      {/* Bottom End */}
    </motion.div>
  );
}
