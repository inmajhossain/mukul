"use client";
import { useState } from "react";
import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { PiStarFourFill } from "react-icons/pi";
import Link from "next/link";

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  client?: string;
  year?: string;
  technologies?: string[];
  liveUrl?: string;
};

const portfolioItems: PortfolioItem[] = [
  // UI/UX Design Projects
  {
    id: 101,
    image: "/images/work/ui1.webp",
    title: "House Cleaning UI Design",
    description:
      "Designing user-friendly interfaces for house cleaning services.",
    category: "UI/UX Design",
    client: "ShopEasy Inc.",
    year: "2024",
    technologies: ["Figma", "Adobe XD", "Prototyping"],
    liveUrl: "https://www.facebook.com/inmajhossainshahin/",
  },
  {
    id: 102,
    title: "Nabu Need Baby Ecom",
    description:
      "Creating visually appealing e-commerce websites for baby products.",
    image: "/images/work/ui2.webp",
    category: "UI/UX Design",
    client: "Baby Ecommerce",
    year: "2024",
    technologies: ["Sketch", "InVision", "User Research"],
    liveUrl: "https://www.facebook.com/inmajhossainshahin/",
  },
  {
    id: 103,
    title: "Webcam Model UI Design",
    description: "Designing modern interfaces for webcam model websites.",
    image: "/images/work/ui3.webp",
    category: "UI/UX Design",
    client: "MedCare Solutions",
    year: "2023",
    technologies: ["Figma", "Adobe Illustrator"],
    liveUrl: "https://www.facebook.com/inmajhossainshahin/",
  },

  // Web Development Projects
  {
    id: 201,
    title: "Pizza Mama",
    description:
      "Designing and developing responsive websites for the food industry.",
    image: "/images/work/webdev1.webp",
    category: "Web Development",
    client: "Pizza Mama",
    year: "2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://www.facebook.com/inmajhossainshahin/",
  },
  {
    id: 202,
    title: "E-commerce Website",
    description:
      "Building user-friendly and secure online shopping experiences.",
    image: "/images/work/webdev2.webp",
    category: "Web Development",
    client: "Emily Davis",
    year: "2024",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://www.facebook.com/inmajhossainshahin/",
  },
  {
    id: 203,
    title: "Personal Portfolio",
    description:
      "Showcasing professional skills and personal brand through custom portfolios.",
    image: "/images/work/webdev3.webp",
    category: "Web Development",
    client: "John Anderson",
    year: "2024",
    technologies: ["Next.js", "Laravel", "MySQL"],
    liveUrl: "https://www.facebook.com/inmajhossainshahin/",
  },
  {
    id: 204,
    title: "Omni food Website",
    description:
      "Developing comprehensive websites for diverse food-related businesses.",
    image: "/images/work/webdev4.webp",
    category: "Web Development",
    client: "Omni",
    year: "2025",
    technologies: ["React", "Framer Motion", "Tailwind"],
    liveUrl: "https://www.facebook.com/inmajhossainshahin/",
  },

  // WordPress Development Projects
  {
    id: 301,
    title: "Spotless4U Cleaning Services Website",
    description:
      "Designed and developed a custom WordPress website for Spotless4U Cleaning Services.",
    image: "/images/work/wordpress1.webp",
    category: "WordPress Development",
    client: "Spotless4U Cleaning Services",
    year: "2024",
    technologies: ["WordPress", "PHP", "Custom Plugins"],
    liveUrl: "https://www.facebook.com/inmajhossainshahin/",
  },
  {
    id: 302,
    title: "Usa Corporation Services Website",
    description:
      "Designed and developed a custom WordPress website for USA Corporation Services.",
    image: "/images/work/wordpress2.webp",
    category: "WordPress Development",
    client: "Usa Corporation",
    year: "2024",
    technologies: ["WordPress", "LearnDash", "WooCommerce"],
    liveUrl: "https://www.facebook.com/inmajhossainshahin/",
  },
  {
    id: 303,
    title: "Skin Supply Products Website",
    description:
      "Designed and developed a custom WordPress website for Skin Supply Products.",
    image: "/images/work/wordpress3.webp",
    category: "WordPress Development",
    client: "Skin Supply Products",
    year: "2025",
    technologies: ["WordPress", "Custom Theme", "Gallery"],
    liveUrl: "https://www.facebook.com/inmajhossainshahin/",
  },

  // Website SEO Projects
  {
    id: 401,
    title: "FunParty Lab SEO Optimization",
    description:
      "Boosting organic search rankings through strategic keyword optimization and content refinement.",
    image: "/images/work/webseo1.webp",
    category: "Website SEO",
    client: "Online Store Plus",
    year: "2025",
    technologies: ["Google Analytics", "SEMrush", "Technical SEO"],
    liveUrl: "https://www.facebook.com/inmajhossainshahin/",
  },
  {
    id: 402,
    title: "FunParty Lab SEO Optimization",
    description:
      "Boosting organic search rankings through strategic keyword optimization and content refinement.",
    image: "/images/work/webseo2.webp",
    category: "Website SEO",
    client: "Wrangler Australia",
    year: "2024",
    technologies: ["Google My Business", "Local Citations"],
    liveUrl: "https://www.facebook.com/inmajhossainshahin/",
  },
  {
    id: 403,
    title: "Wrangler SEO Result",
    description:
      "Driving organic traffic growth and boosting keyword rankings for Wrangler’s Australian catalog.",
    image: "/images/work/webseo3.webp",
    category: "Website SEO",
    client: "Mediavinec",
    year: "2024",
    technologies: ["Google My Business", "Local Citations"],
    liveUrl: "https://www.facebook.com/inmajhossainshahin/",
  },
  {
    id: 404,
    title: "Local SEO & Organic Traffic Growth",
    description:
      "Enhancing local visibility and driving organic traffic growth through targeted SEO strategies.",
    image: "/images/work/webseo4.webp",
    category: "Website SEO",
    client: "WebSEO4",
    year: "2025",
    technologies: ["Google My Business", "Local Citations"],
    liveUrl: "https://www.facebook.com/inmajhossainshahin/",
  },

  // Graphic Design Projects
  {
    id: 501,
    title: "Brand Identity Design",
    description:
      "Designing and developing complete brand identity packages for modern businesses.",
    image: "/images/portfolio/brand-identity.jpg",
    category: "Graphic Design",
    client: "InnovateTech Startup",
    year: "2024",
    technologies: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: 502,
    title: "Marketing Graphics",
    description:
      "Building user-friendly and secure marketing materials for diverse business campaigns.",
    image: "/images/portfolio/marketing-graphics.jpg",
    category: "Graphic Design",
    client: "LaunchPad Marketing",
    year: "2024",
    technologies: ["Adobe Creative Suite", "Figma"],
  },
];

const categories = [
  "UI/UX Design",
  "Web Development",
  "WordPress Development",
  "Website SEO",
  "Graphic Design",
  "Facebook Ads",
  "Google Ads",
  "Youtube SEO",
  "Lead Generation",
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredItems =
    activeCategory === "All Projects"
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div ref={ref} className="flex flex-col gap-[40px] py-16 container-new">
      {/* Title Section */}
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="space-y-[10px] text-left">
          <motion.h6
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="flex flex-row items-center gap-[5px] font-semibold"
          >
            <PiStarFourFill className="text-primary" /> Our Work
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="text-[36px] md:text-[48px] medium"
          >
            Our Work <span className="text-primary">masterpieces</span>
          </motion.h2>
        </div>
        <div>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="hidden lg:flex justify-around items-center bg-primary hover:bg-black px-[10px] rounded-full w-[200px] h-[42px] font-semibold text-white hover:text-white transition-all duration-300"
          >
            View All Portfolio <FaArrowRight />
          </motion.button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex lg:flex-row flex-col gap-8">
        {/* Left Sidebar - Categories */}
        <div className="lg:top-8 lg:sticky lg:self-start lg:w-[385px]">
          <div className="flex items-center bg-primary mb-[20px] p-4 rounded-t-xl h-[70px]">
            <h3 className="font-semibold text-[20px] text-white">Categories</h3>
          </div>
          <div className="flex flex-col justify-between items-start gap-[20px] overflow-hidden">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`w-full text-left p-5 rounded-[10px] border-1 border-primary transition-all duration-300 flex items-center justify-between group ${
                  activeCategory === category
                    ? " text-white border-r-4 bg-primary hover:text-white "
                    : "text-black hover:bg-primary hover:text-white"
                }`}
              >
                <span className="font-medium">{category}</span>
                <FaArrowRight
                  className={`transition-all duration-300 ${
                    activeCategory === category
                      ? "text-white transform translate-x-1"
                      : "text-black  group-hover:text-white  group-hover:transform group-hover:translate-x-1"
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right Content - Portfolio Grid */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="gap-6 grid grid-cols-1 md:grid-cols-2"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white shadow-lg hover:shadow-xl border border-slate-100 rounded-xl overflow-hidden transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative bg-slate-50 h-[250px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="p-[20px] rounded-t-[30px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="top-7 left-7 absolute">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-medium text-gray-700 text-xs">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 text-left">
                    <h3 className="mb-3 font-bold text-gray-800 group-hover:text-primary text-xl transition-colors">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Project Details */}
                    {(item.client || item.year) && (
                      <div className="flex gap-4 mb-4 text-xs">
                        {item.client && (
                          <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                            {item.client}
                          </span>
                        )}
                        {item.year && (
                          <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                            {item.year}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Action Button */}
                    <Link
                      href={item.liveUrl || "#"}
                      passHref
                      className="group/btn flex justify-around items-center gap-2 bg-primary hover:bg-black mt-[30px] px-4 py-3 rounded-full w-[160px] font-medium text-white transition-all duration-300"
                    >
                      View Project
                      <FaArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Work;
