import React from "react";
import { Skill } from "../body-components/Skill";
import BlogHead from "./Blog-Head";
import { Team } from "../body-components/Team";
import { BlogsDetails } from "./BlogsDetails";


const BlogsPage = () => {
  return (
    <div className="space-y-[100px] mt-[50px]">
      <BlogHead/>
      <BlogsDetails/>
      <Team/>
      <Skill/>
    </div>
  );
};

export default BlogsPage;
