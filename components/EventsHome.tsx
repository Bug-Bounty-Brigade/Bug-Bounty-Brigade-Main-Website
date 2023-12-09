import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import reflectedxss from "../app/assets/reflectedxss.png";
import cvehunting from "../app/assets/cvehunting.png";
import Link from 'next/link';
const EventsHome = () => {
  return (
    <div className="flex flex-col py-5 md:py-[40px]">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-start md:flex-row">
          <div className="flex flex-col mx-auto md:mx-0 w-[90%] ">
            <div className="flex flex-col w-[90%]">
              <p className="text-xl font-bold md:text-2xl">Events</p>
              <p className="heading mt-3 text-[27px] sm:text-[36px] font-[700]">
                Stay Updated with Our Latest Events and Webinars
              </p>
              <p className="mt-2 text-color">
                Our expert contributors share valuable information,
                practical tips, and real-life experiences to help you with
                your career.
              </p>
            </div>
          </div>
          <div className="flex pt-[20px] md:pt-0 mx-auto md:mx-0 w-[90%] md:w-auto">
            <Link href="/events"> <button className="flex w-[10.5rem] max-h-[3rem] items-center rounded-[100px] px-[40px] py-[10px] justify-between border border-[#E8EABB] neutral hover:bg-slate-800 transition-all ease-in-out delay-200 hover:text-white">
              View all <FiArrowUpRight />
            </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
          {/* Cards Here */}
          <div className="flex flex-grow w-full">
            <div className="bg-card  w-full flex flex-col justify-between rounded-[24px] p-6 ">
              <Image
                src={reflectedxss}
                width={1000}
                height={1000}
                alt="person photo"
                className="w-full h-[20rem]  mb-[20px] lg:mb-0 rounded-[20px]"
              />
              <div className="flex flex-col justify-center flex-grow ">
                <h2 className="text-[20px] sm:text-[24px] neutral heading">
                  Reflected XSS And Bypasses
                </h2>
                <p className="text-color">
                  A heartfelt thank you to our incredible speaker, Shiv Pratap Singh , for sharing his expertise on Reflected XSS And Bypasses. Your insights illuminated our Bug Bounty Brigade community. We are grateful for your time and effort.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap md:flex-nowrap bg-card rounded-[20px] p-6 bg-[#eeb33b] bg-gradient-radial ">
              <div className="flex flex-col order-2 w-full gap-4 md:pr-8 md:order-1">
                <h2 className="text-[20px] sm:text-[24px] neutral heading">
                  CVE Hunting on Programs
                </h2>
                <p className="text-color">
                  A Resounding Triumph! 🌟The virtual halls of our recent session were buzzing with enthusiasm as the brilliant SANJAY SINGH shared his invaluable insights on CVE Hunting on Programs.
                </p>

              </div>
              <Image
                src={cvehunting}
                width={1000}
                height={1000}
                alt="person photo"
                className="w-full md:w-[14.5rem] md:h-[10rem] rounded-[20px] mb-[20px] md:mb-0 order-1 md:order-2 lg:w-auto"
              />
            </div>
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex flex-col md:flex-row bg-card rounded-[20px] p-6">
                <div className="flex flex-col gap-4 ">
                  <h2 className="text-[20px] sm:text-[24px] neutral heading">
                    How to get started with OSCP
                  </h2>
                  <p className="text-color">
                    Usman Shah shared his incredible journey of becoming an Offensive Security Certified Professional (OSCP).
                  </p>

                </div>
              </div>
              <div className="flex bg-card rounded-[20px] p-6">
                <div className="flex flex-col gap-4 ">
                  <h2 className="text-[20px] sm:text-[24px] neutral heading">
                    Automating Bug Bounty
                  </h2>
                  <p className="text-color">
                    Esteemed speaker S Rahul a highly accomplished Cyber Security Analyst, and skilled Bug Bounty Hunter, delved into the secrets of automating bug bounty workflows.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsHome
