import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Children {
  children: React.ReactNode;
}

const PageLayout: React.FC<Children> = ({ children }) => {
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden px-[44px] lg:px-[84px] bg-[#2E2C28]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
