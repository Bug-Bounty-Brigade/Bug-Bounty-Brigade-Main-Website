"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars } from 'react-icons/fa'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const MobileMenu = ({ className }: any) => {
  const pathname = usePathname();
  const active = "text-[#EEB33B] font-[700]";
  return (
    <div className={...className}>
      <Sheet>
        <SheetTrigger asChild>
          <button  className="mr-[16px] mt-[8px] "><FaBars className="w-[24px] h-[24px] text-[#EEB33B]"></FaBars></button>
        </SheetTrigger>
        <SheetContent className="bg-card">
          <SheetHeader className="h-[85%] ">
            {/* <SheetTitle>Edit profile</SheetTitle> */}
            <SheetDescription
              className="flex mt-11 flex-col text-2xl h-fit gap-8
             justify-between"
            >
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
            </SheetDescription>
          </SheetHeader>

          <SheetFooter>
            <SheetClose asChild>
              <button className="py-[12px] font-[400] px-[40px] rounded-full text-black bg-[#EEB33B]">
                Join our community
              </button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
