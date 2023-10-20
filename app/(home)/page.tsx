import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Nikhil from "../assets/nikhil.jpg"
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
import EventsHome from "@/components/EventsHome";

interface IconDetails {
  icon: React.ReactNode;
  link: string;
  iconName?: string;
}
const iconGroup: IconDetails[] = [
  {
    icon: <BsWhatsapp className="w-[5.25rem] h-[5.25rem]" />,
    link: "https://chat.whatsapp.com/IoJp03EGpe5A9ybvbo6VIM",
    iconName: "whatsapp",

  },
  {
    icon: <BsLinkedin className="w-[5.25rem] h-[5.25rem]" />,
    link: "https://www.linkedin.com/company/bug-bounty-brigade/",
    iconName: "linkedin",

  },
  {
    icon: <BsTwitter className="w-[5.25rem] h-[5.25rem]" />,
    link: "https://twitter.com/BBB_GHC",
    iconName: "twitter",
  },
  {
    icon: <BsDiscord className="w-[5.25rem] h-[5.25rem]" />,
    link: "https://discord.gg/N73nyWdj",
    iconName: "discord",
  },
  {
    icon: <BsGithub className="w-[5.25rem] h-[5.25rem]" />,
    link: "https://github.com/Bug-Bounty-Brigade",
    iconName: "github",
  },
  
  {
    icon: <BsYoutube className="w-[5.25rem] h-[5.25rem]" />,
    link: "https://youtube.com/@bugbountybrigade?si=7gc17nT4Xvqxr33U",
    iconName: "youtube",
  },
  {
    icon: <BsTelegram className="w-[5.25rem] h-[5.25rem]" />,
    link: "https://t.me/Resources6969",
    iconName: "telegram",

  },
  
  {
    icon: <BsInstagram className="w-[5.25rem] h-[5.25rem]" />,
    link: "https://instagram.com/bugbountybrigade?utm_source=qr&igshid=OGIxMTE0OTdkZA==",
    iconName: "instagram",
  },
  
];

export default function Home() {
  return (
    <PageLayout>
      <main className="flex flex-col gap-4 py-4 ">
        <h1 className="flex heading font-[700] text-[1.2rem] md:text-[36px] xl:text-[48px]">
          Unleash Your Cybersecurity Skills and Safeguard the Digital World with
          Bug Bounty Brigade
        </h1>
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-0 lg:grid-cols-2">
          <Image
            src="/heroImage.png"
            width={1000}
            height={1000}
            alt="person photo"
            className="w-full lg:w-[90%] lg:h-[26rem]"
          />
          <div className="flex flex-col justify-center gap-4 ">
            <p>
              Join the leading community of ethical hackers and cybersecurity
              enthusiasts. Together, we strive to make the digital world safer
              by identifying vulnerabilities and protecting organizations from
              potential threats.
            </p>
            <p> Are you ready to harness your skills and make a real impact?</p>
            <a className="flex items-center justify-center gap-1 btn max-w-[17.5rem] w-full py-[10px]" href="https://chat.whatsapp.com/IoJp03EGpe5A9ybvbo6VIM" target="_blank">
              Join our community
              <FiArrowUpRight />
            </a>
            <div className="flex w-full gap-[30px]">
              <div className="flex flex-col items-center w-1/2 gap-2 md:gap-4 md:flex-row md:w-auto">
                <h1 className="text-[40px] font-[700] gap-4 neutral">1.5K+</h1>
                <h2 className="w-full text-center md:text-left">Community members</h2>
              </div>
              <hr className="rotate-180 border border-[#6C5B3F] h-full " />
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <Image
                  src={Nikhil}
                  width={1000}
                  height={1000}
                  alt="person photo"
                  className="w-12 h-12 rounded-full"
                />
                <p className="text-center md:text-left">“Super cool place to “learn and grow”</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12">
          <div className="flex flex-col px-[21px] sm:px-[42px] py-[20px] md:px-[84px] md:py-[40px] rounded-2xl" style={{ background: 'linear-gradient(99deg, #000, transparent 84%)' }}>

            <p className="text-xl font-bold text-center md:text-4xl ">About us</p>
            <h2 className="heading  font-[700] text-[24px] md:text-[36px] text-center">
              Empowering Security through Collaboration
            </h2>
            <p className="md:text-center mt-2 font-[22px] md:font-[18px] text-color">
              Bug Bounty Brigade is a vibrant community of cybersecurity
              professionals and ethical hackers dedicated to enhancing the
              security of digital systems. Our mission is to cultivate a
              thriving community of bug hunters, by bug hunters, for bug
              hunters. We aim to foster collaboration, knowledge sharing, and
              professional growth among security researchers and information
              security professionals. By promoting responsible disclosure and
              ethical hacking practices, we strive to enhance the security of
              digital systems and protect organizations from cyber threats.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-12 md:py-12">
          <div>
            {/* <p className="text-xl font-bold text-center md:text-4xl">Join us</p> */}
            <h2 className="heading font-[700] text-center text-[27px] sm:text-[36px]">
              Join the Bug Bounty Brigade Community
            </h2>
          </div>


            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {iconGroup.map((icon, index) => (
                <div
                  key={index}
                  className=" flex items-center justify-center w-full rounded-[24px] mx-auto max-w-[300px] bg-[#2f4f4f]"
                >
                <div className='w-full px-6 py-6'>  
                  <div className="flex justify-center items-center  flex-col gap-9 lg:gap-20 mx-auto min-h-[100px] md:min-h-[227px]">
                      <div className="text-[#EEB33B] ">
                        {icon.icon}
                      </div>
                    </div>
                   <a href={icon.link} target="_blank"> <p className="border-b w-fit cursor-pointer border-b-[#EEB33B] text-[#EEB33B] text-center mx-auto">
                      Join us on {icon.iconName}
                    </p>
                    </a>
                  </div>
                </div>

              ))}

          </div>
        </div>
        <EventsHome />
        <div className="flex flex-col py-5 md:py-[40px]">
          <div className="flex flex-col gap-12">
             <div className="flex flex-col items-start md:flex-row">
              <div className="flex flex-col mx-auto md:mx-0 w-[90%] ">
                <div className="flex flex-col w-[90%]">
                  <p className="text-xl font-bold md:text-2xl">Blogs</p>
                  <p className="heading mt-3 text-[27px] sm:text-[36px] font-[700]">
                    Stay Updated with Our Latest Blogs
                  </p>
                  <p className="mt-6 text-color">
                    Our expert contributors share valuable information,
                    practical tips, and real-world experiences to help you
                    navigate the ever-evolving landscape of digital security.
                    Discover engaging articles, tutorials, case studies, and
                    much more.
                  </p>
                </div>
              </div>
              <div className="flex pt-[20px] md:pt-0 mx-auto md:mx-0 w-[90%] md:w-auto">
                <button className="flex w-[15.5rem] max-h-[3rem] items-center rounded-[100px] px-[40px] py-[10px] justify-between border border-[#E8EABB] neutral">
                  View all <FiArrowUpRight />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
              {/* Cards Here */}
              <div className="flex flex-grow w-full">
                <div className="bg-card  w-full flex flex-col justify-between rounded-[24px] p-6">
                  <Image
                    src="/heroImage.png"
                    width={1000}
                    height={1000}
                    alt="person photo"
                    className="w-full h-[13.5rem] object-cover mb-[20px] lg:mb-0 rounded-[20px]"
                  />
                  <div className="flex flex-col gap-4 flex-grow justify-center sm:w-[80%]">
                    <h2 className="text-[20px] sm:text-[24px] neutral">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                      do{" "}
                    </h2>
                    <h2 className="text-color">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                      do{" "}
                    </h2>
                    <p className="border-b mt-1 w-fit border-b-[#EEB33B] text-[#EEB33B]">
                      Read now
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap md:flex-nowrap bg-card rounded-[20px] p-6 bg-[#eeb33b]bg-gradient-radial">
                  <div className="flex flex-col gap-4 w-full sm:w-[80%] md:pr-8 order-2 md:order-1">                    
                    <h2 className="text-[20px] sm:text-[24px] neutral">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                      do{" "}
                    </h2>
                    <h2 className="text-color">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                      do{" "}
                    </h2>
                    <p className="border-b mt-1 w-fit border-b-[#EEB33B] text-[#EEB33B]">
                      Read now
                    </p>
                  </div>
                  <Image
                    src="/teamphoto.png"
                    width={1000}
                    height={1000}
                    alt="person photo"
                    className="w-full md:w-[14.5rem] md:h-[10rem] rounded-[20px] mb-[20px] md:mb-0 object-cover order-1 md:order-2 lg:w-auto"
                  />
                </div>
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex flex-col md:flex-row bg-card rounded-[20px] p-6">
                    <div className="flex flex-col gap-4 sm:w-[80%]">
                      <h2 className="text-[20px] sm:text-[24px] neutral">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        sed do{" "}
                      </h2>
                      <h2 className="text-color">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        sed do{" "}
                      </h2>
                      <p className="border-b mt-1 w-fit border-b-[#EEB33B] text-[#EEB33B]">
                        Read now
                      </p>
                    </div>
                  </div>
                  <div className="flex bg-card rounded-[20px] p-6">
                    <div className="flex flex-col gap-4 sm:w-[80%]">
                      <h2 className="text-[20px] sm:text-[24px] neutral">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        sed do{" "}
                      </h2>
                      <h2 className="text-color">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        sed do{" "}
                      </h2>
                      <p className="border-b mt-1 w-fit border-b-[#EEB33B] text-[#EEB33B]">
                        Read now
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
