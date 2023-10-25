import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Children {
  children: React.ReactNode;
}

const PageLayout: React.FC<Children> = ({ children }) => {
  return (
    <main className="min-h-screen max-w-[90rem] overflow-x-hidden px-[12px] md:px-[24px] lg:px-[42px] xl:px-[84px] mx-auto ">
      <Navbar />
      <section className="mx-auto md:w-full">{children}</section>
      <Footer />
    </main>
  );
};

export default PageLayout;
