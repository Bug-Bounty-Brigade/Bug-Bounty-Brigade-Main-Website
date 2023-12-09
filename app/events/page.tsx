import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import React from "react";

import type { Metadata } from "next";
import { events } from "../../lib/data/data.events";
export const metadata: Metadata = {
  title: "Bug Bounty Brigade - Events",
  description: "Join the Latest Events in Bug Bounty Brigade",
};

const Events = () => {
  return (
    <PageLayout>
      <header className="flex flex-col items-center w-full gap-4 md:gap-12 md:flex-row">
        <h2 className="text-[1.2rem] heading font-[700] w-full md:text-[36px]">
          Ignite Your Cybersecurity Journey with Our Events
        </h2>
        <p className="text-lg md:text-2xl md:text-[18px] font-[400] w-full text-color">
          Engage in captivating discussions, interactive workshops, and
          networking opportunities with industry experts. Ignite your
          cybersecurity journey by staying informed, connecting with like-minded
          professionals, and expanding your knowledge in a dynamic and inclusive
          community.
        </p>
      </header>
      <div className="grid w-full grid-cols-1 py-12 md:grid-cols-3 gap-x-6 gap-y-12 justify-stretch">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative bg-cardevents  flex flex-col rounded-[24px] p-6 gap-2 md:gap-4 hover:shadow-2xl shadow-red-400 inset-0 shadowCard bg-[#717D90]"
          >
            <Image
              src={event.image}
              alt="event banner"
              width={1000}
              height={1000}
              className="max-h-[14.75rem] rounded-md hover:scale-110 transition duration-100 delay-200 ease-in-out"
            />
            <p className=" text-color">{event.date}</p>
            <h2 className="neutral text-[24px] font-[700]  heading">{event.title}</h2>
            <p className="text-[18px] text-color text-blue-950 font-semibold">{event.description}</p>
            <p className="text-[18px] text-color font-bold ">{event.attendeesCount}</p>
            <a className=" py-[12px]  px-[40px]  text-black text-center font-semibold hover:bg-yellow-600  bg-yellow-500 mt-4 rounded-xl   bg-gradient-to-r from-yellow-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  tracking-wide transition ease-in-out duration-150  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none" href={event.event_link} target="_blank">
              Join this event
            </a>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Events;
