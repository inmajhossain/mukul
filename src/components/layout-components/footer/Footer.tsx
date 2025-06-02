import React from "react";

import FooterInfo from "@/components/layout-components/footer/FooterInfo";

const Footer = () => {
  return (
    <div className="bg-white mt-[500px] lg:px-[40px] w-full">
      {/* Background */}
      <div className="bg-primary mx-auto p-[15px] md:p-[25px] rounded-t-[25px] w-full lg:h-[480px]">
        <FooterInfo />
      </div>
    </div>
  );
};

export default Footer;
