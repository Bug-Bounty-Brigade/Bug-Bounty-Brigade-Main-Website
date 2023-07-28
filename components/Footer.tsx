import React from "react";
import {
  BsDiscord,
  BsTelegram,
  BsGithub,
  BsTwitter,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#40392F] px-12 py-[40px] rounded-[24px]">
      <div className="w-full flex flex-col">
        <div className="flex w-full justify-between">
          <div className="flex items-center">
            <h2>Bug Bounty Brigade</h2>
          </div>
          <div className="flex gap-2">
            <BsDiscord className="icon-style" />
            <BsGithub className="icon-style" />
            <BsTwitter className="icon-style" />
            <BsYoutube className="icon-style" />
            <BsTelegram className="icon-style" />
            <BsLinkedin className="icon-style" />
            <BsInstagram className="icon-style" />
            <BsFacebook className="icon-style" />
          </div>
        </div>
        <hr className="my-5 border border-[#6C5B3F]" />
        <div className="flex w-full justify-between">
          <p>© 2023 Bug Bounty Brigade All Rights Reserved</p>
          <button className="py-[12px] font-[400] px-[40px] rounded-full text-black bg-[#EEB33B]">
            Join our community
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
