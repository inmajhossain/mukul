import React from "react";
import { About } from "../body-components/About";
import TestimonialHead from "./Testimonial-Head";
import { Skill } from "../body-components/Skill";
import { TestimonialInfo } from "./TestimonialInfo";


const TestimonialsPage = () => {
  return (
    <div className="space-y-[100px] mt-[50px]">
      <TestimonialHead/>
      <TestimonialInfo/>
      <About />
      <Skill/>
    </div>
  );
};

export default TestimonialsPage;
