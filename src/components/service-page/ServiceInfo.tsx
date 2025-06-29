"use client";

import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { motion, useInView } from "framer-motion";


// ✅ Blogs Data
const Serviceinfo = [
  {
    src: "/images/service/serviceone.webp",
    title:
      "UI/UX Design",
      Info: "We design intuitive and user-friendly interfaces that enhance user experience and engagement. Our expert designers focus on usability, aesthetics, and functionality to create visually appealing and seamless digital experiences tailored to your audience."
    
  },
  {
    src: "/images/service/servicetwo.webp",
    title:
      "Website Development",
      Info: "We develop fast, secure, and scalable websites tailored to your business needs. Using the latest technologies, our team ensures that your website is fully responsive, optimized for performance, and provides a seamless experience across all devices."
    
  },
  {
    src: "/images/service/servicethree.webp",
    title:
      "WordPress Development",
      Info: "We specialize in custom WordPress development to create unique and functional websites. Our developers leverage the power of WordPress to build feature-rich websites that are easy to manage, SEO-friendly, and fully customized to meet your requirements."
    
  },
  {
    src: "/images/service/servicefour.webp",
    title:
      "Website SEO",
      Info: "We optimize your website for search engines to improve visibility and drive organic traffic. Our SEO strategies include keyword research, on-page and off-page optimization, content strategy, and technical improvements to enhance your rankings and online presence."
    
  },
  {
    src: "/images/service/servicefive.webp",
    title:
      "Graphic Design",
      Info: "We create visually stunning designs that communicate your brand message effectively. Our creative team specializes in crafting unique branding elements, marketing materials, and digital assets that leave a lasting impression on your audience."
    
  },
  {
    src: "/images/service/servicesix.webp",
    title:
      "Social Media Marketing",
      Info: "We develop result-driven social media strategies to grow your audience and increase engagement. By leveraging data-driven insights, compelling content, and targeted ad campaigns, we help businesses build strong online communities and enhance brand awareness."
    
  },
  {
    src: "/images/service/serviceseven.webp",
    title:
      "Facebook Ads",
      Info: "We create high-converting Facebook ad campaigns that drive traffic, generate leads, and boost sales. Our experts optimize ad creatives, audience targeting, and ad spend to ensure maximum ROI for your business."
    
  },
  {
    src: "/images/service/serviceeight.webp",
    title:
      "Google Ads",
      Info: "We run targeted Google Ads campaigns to place your business in front of the right audience. Our team manages keyword research, ad copy, bidding strategies, and conversion tracking to deliver measurable results."
    
  },
  {
    src: "/images/service/servicenine.webp",
    title:
      "YouTube Video SEO",
      Info: "We optimize YouTube videos for higher rankings and better visibility. Our SEO techniques include keyword-rich titles, descriptions, tags, thumbnails, and engagement strategies to grow your channel and reach a wider audience."
    
  },
  {
    src: "/images/service/serviceten.webp",
    title:
      "Video Editing",
      Info: "We provide professional video editing services to enhance the quality and visual appeal of your videos. Our team edits raw footage, adds effects, transitions, music, and graphics to create engaging video content for your audience."
    
  },
  {
    src: "/images/service/serviceeleven.webp",
    title:
      "Email Marketing",
      Info: "We design and execute email marketing campaigns that nurture leads and drive conversions. Our services include personalized email content, automated sequences, A/B testing, and analytics to maximize engagement and ROI."
    
  },
  {
    src: "/images/service/servicetwelve.webp",
    title:
      "Lead Generation",
      Info: "We implement lead generation strategies to attract and convert prospects into customers. Our services include landing page optimization, content offers, lead magnets, and email capture forms to grow your sales pipeline."
    
  },
  {
    src: "/images/service/servicethirteen.webp",
    title:
      "Influencer Marketing",
      Info: "We research and identify influencers to help promote your brand and expand your reach. Our team analyzes potential influencer partnerships to ensure authentic content that resonates with your target market. However, we do not handle outreach or direct communication with influencers."
    
  },
  
];

export const ServiceInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    
      <div ref={ref}  className="flex md:flex-row flex-col md:flex-wrap justify-between items-center gap-[15px] gap-y-[20px] container-new">
        {Serviceinfo.map((member, index) => (
          <motion.div
            
            className="flex flex-col items-start space-y-[20px] bg-slate-50 shadow-black drop-shadow-[10px] mx-auto p-[20px] border-[1px] border-slate-100 rounded-[20px] w-[360px] md:w-[350px] lg:w-[390px] h-[580px] text-center hover:scale-105 transition-all duration-500 ease-in"
          >
            
              <div className="space-y-[20px] mx-auto min-h-[470px]">
                <motion.div  key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}>
                  <Image
                src={member.src}
                alt={member.title}
                width={290}
                height={330}
                className="mx-auto border-2 border-primary rounded-[20px] w-[350px] h-[255px] object-cover"
              />
                </motion.div>
              <h5 className="font-bold text-[18px] text-black text-left">
                {member.title}
              </h5>
              <p className="text-[16px] text-slate-500 text-left">
                {member.Info}
              </p>
              </div>
              <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="flex justify-around items-center bg-primary hover:bg-black p-[10px] rounded-full w-[160px] h-[42px] font-semibold text-white hover:text-white transition-all duration-300"
          >
            Read More <FaArrowRight />
          </motion.button>
            
            
          </motion.div>
        ))}
      </div>
      
  );
};
