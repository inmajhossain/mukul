"use client";
import { useState } from "react";
import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { PiStarFourFill } from "react-icons/pi";

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
    liveUrl: "https://example.com/ecommerce-app",
  },
  {
    id: 102,
    title: "Banking Dashboard",
    description:
      "Building user-friendly and secure online banking experiences with modern design principles.",
    image: "/images/portfolio/banking-dashboard.jpg",
    category: "UI/UX Design",
    client: "SecureBank",
    year: "2024",
    technologies: ["Sketch", "InVision", "User Research"],
  },
  {
    id: 103,
    title: "Healthcare Platform",
    description:
      "Designing comprehensive websites for diverse healthcare businesses and medical practices.",
    image: "/images/portfolio/healthcare-ui.jpg",
    category: "UI/UX Design",
    client: "MedCare Solutions",
    year: "2023",
    technologies: ["Figma", "Adobe Illustrator"],
  },
  {
    id: 104,
    title: "Food Delivery App",
    description:
      "Showcasing professional skills and personal brand through custom portfolio design.",
    image: "/images/portfolio/food-delivery.jpg",
    category: "UI/UX Design",
    client: "QuickBite",
    year: "2023",
    technologies: ["Figma", "Principle"],
  },
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
    liveUrl: "https://example.com/ecommerce-app",
  },
  {
    id: 102,
    title: "Banking Dashboard",
    description:
      "Building user-friendly and secure online banking experiences with modern design principles.",
    image: "/images/portfolio/banking-dashboard.jpg",
    category: "UI/UX Design",
    client: "SecureBank",
    year: "2024",
    technologies: ["Sketch", "InVision", "User Research"],
  },
  {
    id: 103,
    title: "Healthcare Platform",
    description:
      "Designing comprehensive websites for diverse healthcare businesses and medical practices.",
    image: "/images/portfolio/healthcare-ui.jpg",
    category: "UI/UX Design",
    client: "MedCare Solutions",
    year: "2023",
    technologies: ["Figma", "Adobe Illustrator"],
  },
  {
    id: 104,
    title: "Food Delivery App",
    description:
      "Showcasing professional skills and personal brand through custom portfolio design.",
    image: "/images/portfolio/food-delivery.jpg",
    category: "UI/UX Design",
    client: "QuickBite",
    year: "2023",
    technologies: ["Figma", "Principle"],
  },

  // Web Development Projects
  {
    id: 201,
    title: "Corporate Website",
    description:
      "Designing and developing responsive websites for the business industry with modern approach.",
    image: "/images/portfolio/corporate-website.jpg",
    category: "Web Development",
    client: "BusinessPro Consulting",
    year: "2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com/corporate-site",
  },
  {
    id: 202,
    title: "Restaurant Chain",
    description:
      "Building user-friendly and secure online food ordering experiences for restaurant chains.",
    image: "/images/portfolio/restaurant-website.jpg",
    category: "Web Development",
    client: "Tasty Bites Chain",
    year: "2024",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 203,
    title: "Real Estate Platform",
    description:
      "Developing comprehensive websites for diverse real estate businesses and property listings.",
    image: "/images/portfolio/realestate-platform.jpg",
    category: "Web Development",
    client: "PrimeProperties",
    year: "2023",
    technologies: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    id: 204,
    title: "Tech Startup Landing",
    description:
      "Showcasing professional skills through custom landing page development for tech startups.",
    image: "/images/portfolio/tech-startup.jpg",
    category: "Web Development",
    client: "InnovateTech",
    year: "2023",
    technologies: ["React", "Framer Motion", "Tailwind"],
  },

  // WordPress Development Projects
  {
    id: 301,
    title: "News Portal",
    description:
      "Designing and developing responsive news websites with advanced content management systems.",
    image: "/images/portfolio/news-portal.jpg",
    category: "WordPress Development",
    client: "Daily News Network",
    year: "2024",
    technologies: ["WordPress", "PHP", "Custom Plugins"],
  },
  {
    id: 302,
    title: "E-learning Platform",
    description:
      "Building user-friendly and secure online learning experiences with course management.",
    image: "/images/portfolio/elearning-platform.jpg",
    category: "WordPress Development",
    client: "EduTech Solutions",
    year: "2024",
    technologies: ["WordPress", "LearnDash", "WooCommerce"],
  },
  {
    id: 303,
    title: "Photography Portfolio",
    description:
      "Developing comprehensive websites for diverse photography businesses and creative professionals.",
    image: "/images/portfolio/photography-portfolio.jpg",
    category: "WordPress Development",
    client: "John Doe Photography",
    year: "2023",
    technologies: ["WordPress", "Custom Theme", "Gallery"],
  },
  {
    id: 304,
    title: "Non-Profit Website",
    description:
      "Showcasing professional skills through custom WordPress development for non-profit organizations.",
    image: "/images/portfolio/nonprofit-site.jpg",
    category: "WordPress Development",
    client: "Hope Foundation",
    year: "2023",
    technologies: ["WordPress", "Custom Plugins", "PayPal"],
  },

  // Website SEO Projects
  {
    id: 401,
    title: "E-commerce SEO Campaign",
    description:
      "Designing and developing SEO strategies for online retail businesses to boost organic traffic.",
    image: "/images/portfolio/ecommerce-seo.jpg",
    category: "Website SEO",
    client: "Online Store Plus",
    year: "2024",
    technologies: ["Google Analytics", "SEMrush", "Technical SEO"],
  },
  {
    id: 402,
    title: "Local Business SEO",
    description:
      "Building user-friendly and secure local SEO strategies for small businesses and practices.",
    image: "/images/portfolio/local-seo.jpg",
    category: "Website SEO",
    client: "Smile Dental Clinic",
    year: "2024",
    technologies: ["Google My Business", "Local Citations"],
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
            <PiStarFourFill className="text-primary" /> Our Portfolio
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="text-[36px] md:text-[48px] medium"
          >
            Our amazing <span className="text-primary">projects</span>
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
                    <div className="top-4 left-4 absolute">
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
                    <button className="group/btn flex justify-around items-center gap-2 bg-primary hover:bg-black mt-[30px] px-4 py-3 rounded-full w-[160px] font-medium text-white transition-all duration-300">
                      View Project
                      <FaArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                    </button>
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
