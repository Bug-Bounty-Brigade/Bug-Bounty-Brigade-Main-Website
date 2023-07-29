import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Children {
  children: React.ReactNode;
}

const PageLayout: React.FC<Children> = ({ children }) => {
  return (
    <div className="min-h-screen max-w-7xl overflow-x-hidden  lg:px-[84px] mx-auto ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
