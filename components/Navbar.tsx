"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const pathname = usePathname();

  const active = "text-[#EEB33B] font-[700]";

  return (
    <div className="w-full flex py-4">
      <nav className="w-full flex px-[10px] rounded-[100px] py-2 md:py-4 bg-[#5f9ea0]">
        <div className="flex w-full">
          <div className="flex w-full items-center justify-between">
            <div className="flex gap-3 items-center">
              <Image
                src="/mainlogo.png"
                width={1000}
                height={1000}
                quality={100}
                className="w-12 h-12 rounded-full object-cover"
                alt="logo"
              />
              <h2 className="text-[#EEB33B] text-[20px] font-[700]">
                Bug Bounty Brigade
              </h2>
            </div>
            <MobileMenu className="lg:hidden" />
            <ul className="hidden lg:flex gap-16 items-center">
              <Link href="/" className={pathname === "/" ? active : ""}>
                Home
              </Link>
              <Link
                href="events"
                className={pathname.includes("events") ? active : ""}
              >
                Events
              </Link>
              <Link
                href="blogs"
                className={pathname.includes("blogs") ? active : ""}
              >
                Blogs
              </Link>
              <Link
                href="about"
                className={pathname.includes("about") ? active : ""}
              >
                About us
              </Link>
              <a className="py-[12px] font-[400] px-[40px] rounded-full text-black text-center bg-[#EEB33B]" href="https://chat.whatsapp.com/IoJp03EGpe5A9ybvbo6VIM" target="_blank">
                Join our community
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
