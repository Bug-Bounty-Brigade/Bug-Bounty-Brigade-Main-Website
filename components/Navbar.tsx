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
    <header className="flex w-full py-4">
      <nav className="w-full flex px-[10px] rounded-[100px] py-2 md:py-4" style={{ background: 'linear-gradient(99deg,  #000, transparent  94%)' }}>
        <div className="flex w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <Image
                src="/mainlogo.png"
                width={1000}
                height={1000}
                quality={100}
                className="object-cover w-12 h-12 rounded-full"
                alt="logo"
              />
              <h2 className="text-[#EEB33B] text-[20px] font-[700]">
                Bug Bounty Brigade
              </h2>
            </div>
            <MobileMenu className="lg:hidden" />
            <ul className="items-center hidden gap-16 lg:flex">
              <Link href="/" className={pathname === "/" ? active : ""}>
                Home
              </Link>
              <Link
                href="/events"
                className={pathname.includes("events") ? active : ""}
              >
                Events
              </Link>
              <Link
                href="/blogs"
                className={pathname.includes("blogs") ? active : ""}
              >
                Blogs
              </Link>
              <Link
                href="/about"
                className={pathname.includes("about") ? active : ""}
              >
                About us
              </Link>
              <a className="py-[12px] font-[400] px-[40px] rounded-full text-black text-center bg-[#EEB33B] bg-gradient-to-r from-yellow-500 to-yellow-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none" href="https://chat.whatsapp.com/IoJp03EGpe5A9ybvbo6VIM" target="_blank">
                Join our community
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
