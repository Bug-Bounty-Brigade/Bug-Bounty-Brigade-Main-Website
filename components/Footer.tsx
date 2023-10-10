import Image from "next/image";
import React from "react";
import {
  BsDiscord,
  BsTelegram,
  BsGithub,
  BsTwitter,
  BsLinkedin,
  BsWhatsapp,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex w-[90%] md:w-full mx-auto flex-col py-4 md:py-12">
      <div className=" md:px-6 sm:px-12 md:py-[40px] rounded-[24px]">
        <div className="flex flex-col w-full">
          <div className="flex flex-col justify-between w-full md:flex-row gap-y-6 md:gap-y-0">
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
            <div className="grid grid-cols-4 gap-6 md:grid-cols-3 lg:grid-cols-8">
              <a href="https://discord.gg/N73nyWdj" target="_blank"><BsDiscord className="icon-style" /></a>
              <a href="https://github.com/Bug-Bounty-Brigade" target="_blank"><BsGithub className="icon-style" /></a>
              <a href="https://twitter.com/BBB_GHC " target="_blank"><BsTwitter className="icon-style" /></a>
              <a href="https://youtube.com/@bugbountybrigade?si=7gc17nT4Xvqxr33U" target="_blank"><BsYoutube className="icon-style" /></a>
              <a href="https://t.me/Resources6969" target="_blank"><BsTelegram className="icon-style" /></a>
              <a href="https://www.linkedin.com/company/bug-bounty-brigade/" target="_blank"><BsLinkedin className="icon-style" /></a>
              <a href="https://instagram.com/bugbountybrigade?utm_source=qr&igshid=OGIxMTE0OTdkZA==" target="_blank"><BsInstagram className="icon-style" /></a>
              <a href="https://chat.whatsapp.com/IoJp03EGpe5A9ybvbo6VIM" target="_blank"><BsWhatsapp className="icon-style" /></a>
            </div>
          </div>
          <hr className="my-5 border border-[#6C5B3F]" />
          <div className="flex flex-col justify-between w-full gap-4 md:flex-row">
            <p>© 2023 Bug Bounty Brigade All Rights Reserved</p>
            <a className="py-[12px] font-[400] px-[40px] rounded-full text-black text-center bg-[#EEB33B]" href="https://chat.whatsapp.com/IoJp03EGpe5A9ybvbo6VIM" target="_blank">
              Join our community
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
