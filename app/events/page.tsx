import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import React from "react";

interface EventPosts {
  image: string;
  date: string;
  title: string;
  description: string;
  attendeesCount: string;
}

const events: EventPosts[] = [
  {
    image: "/heroImage.png",
    date: "Wed, Jun 28, 2023, 10.30am",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    attendeesCount: "Devon Miles | 122 attendees",
  },
  {
    image: "/heroImage.png",
    date: "Wed, Jun 28, 2023, 10.30am",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    attendeesCount: "Devon Miles | 122 attendees",
  },
  {
    image: "/heroImage.png",
    date: "Wed, Jun 28, 2023, 10.30am",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    attendeesCount: "Devon Miles | 122 attendees",
  },
  {
    image: "/heroImage.png",
    date: "Wed, Jun 28, 2023, 10.30am",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    attendeesCount: "Devon Miles | 122 attendees",
  },
  {
    image: "/heroImage.png",
    date: "Wed, Jun 28, 2023, 10.30am",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    attendeesCount: "Devon Miles | 122 attendees",
  },
  {
    image: "/heroImage.png",
    date: "Wed, Jun 28, 2023, 10.30am",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    attendeesCount: "Devon Miles | 122 attendees",
  },
];

const Events = () => {
  return (
    <PageLayout>
      <header className="flex gap-12 w-full items-center">
        <h2 className="heading font-[700] w-full text-[48px]">
          Ignite Your Cybersecurity Journey with Our Events
        </h2>
        <p className="text-[18px] font-[400] w-full text-color">
          Engage in captivating discussions, interactive workshops, and
          networking opportunities with industry experts. Ignite your
          cybersecurity journey by staying informed, connecting with like-minded
          professionals, and expanding your knowledge in a dynamic and inclusive
          community.
        </p>
      </header>
      <div className="grid grid-cols-3 gap-x-6 gap-y-12 justify-stretch w-full py-12">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-card flex flex-col rounded-[24px] p-6 gap-6"
          >
            <Image
              src={event.image}
              alt="event banner"
              width={1000}
              height={1000}
              className="max-h-[14.75rem]"
            />
            <p className="text-color">{event.date}</p>
            <p className="neutral text-[24px] font-[700]">{event.title}</p>
            <p className="text-[18px] text-color">{event.description}</p>
            <p className="text-[18px] text-color">{event.description}</p>
            <p className="text-[18px] text-color">{event.attendeesCount}</p>
            <button className="py-[12px] w-full font-[400] px-[40px] rounded-full text-black bg-[#EEB33B]">
              Join our community
            </button>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Events;
