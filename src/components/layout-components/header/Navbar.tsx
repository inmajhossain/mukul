import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex lg:flex-row md:justify-between md:items-center gap-[24px] lg:max-w-[600px] font-bold text-[16px] text-primary">
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
    </nav>
  );
};

export default Navbar;
