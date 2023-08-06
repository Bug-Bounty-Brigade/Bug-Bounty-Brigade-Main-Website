import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
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

interface IconDetails {
  iconName: React.ReactNode;
  link: string;
}

const iconGroup: IconDetails[] = [
  {
    iconName: <BsDiscord className="w-[5.25rem] h-[5.25rem]" />,
    link: "",
  },
  {
    iconName: <BsGithub className="w-[5.25rem] h-[5.25rem]" />,
    link: "",
  },
  {
    iconName: <BsTwitter className="w-[5.25rem] h-[5.25rem]" />,
    link: "",
  },
  {
    iconName: <BsYoutube className="w-[5.25rem] h-[5.25rem]" />,
    link: "",
  },
  {
    iconName: <BsTelegram className="w-[5.25rem] h-[5.25rem]" />,
    link: "",
  },
  {
    iconName: <BsLinkedin className="w-[5.25rem] h-[5.25rem]" />,
    link: "",
  },
  {
    iconName: <BsInstagram className="w-[5.25rem] h-[5.25rem]" />,
    link: "",
  },
  {
    iconName: <BsFacebook className="w-[5.25rem] h-[5.25rem]" />,
    link: "",
  },
];

export default function Home() {
  return (
    <PageLayout>
      <main className="flex flex-col gap-12 py-12">
        <h1 className="flex heading font-[700] text-[48px]">
          Unleash Your Cybersecurity Skills and Safeguard the Digital World with
          Bug Bounty Brigade
        </h1>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-0 md:grid-cols-2">
          <Image
            src="/heroImage.png"
            width={1000}
            height={1000}
            alt="person photo"
            className="w-full md:w-[90%] h-[26rem]"
          />
          <div className="flex flex-col gap-12">
            <p>
              Join the leading community of ethical hackers and cybersecurity
              enthusiasts. Together, we strive to make the digital world safer
              by identifying vulnerabilities and protecting organizations from
              potential threats.
            </p>
            <p> Are you ready to harness your skills and make a real impact?</p>
            <button className="flex items-center justify-center gap-1 btn max-w-[17.5rem] w-full py-[10px]">
              Join our community
              <FiArrowUpRight />
            </button>
            <div className="flex w-full gap-[30px]">
              <div className="flex items-center gap-4">
                <h1 className="text-[40px] font-[700] gap-4 neutral">10K+</h1>
                <h2>Community members</h2>
              </div>
              <hr className="rotate-180 border border-[#6C5B3F] h-full " />
              <div className="flex items-center gap-4">
                <Image
                  src="/teamphoto.png"
                  width={1000}
                  height={1000}
                  alt="person photo"
                  className="w-12 h-12 rounded-full"
                />
                <p>“Super cool place to “learn and grow”</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="bg-card flex flex-col px-[84px] py-[40px]">
            <p className="text-center">About us</p>
            <h2 className="heading mt-3 font-[700] text-[36px] text-center">
              Empowering Security through Collaboration
            </h2>
            <p className="text-center mt-6 font-[18px] text-color">
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
        <div className="flex flex-col gap-12 py-12">
          <div>
            <p className="text-center text-[20px]">Join us</p>
            <h2 className="heading font-[700] text-center text-[36px]">
              Join the Bug Bounty Brigade Community
            </h2>
          </div>
          <div className="grid justify-between grid-cols-4 gap-6">
            {iconGroup.map((icon, index) => (
              <div
                key={index}
                className="bg-card flex items-center w-full px-[66px] pt-[88px] rounded-[24px] pb-6"
              >
                <div className="flex flex-col gap-20 mx-auto ">
                  <div className="text-[#EEB33B] flex items-center text-center w-fit mx-auto">
                    {icon.iconName}
                  </div>
                  <p className="border-b w-fit border-b-[#EEB33B] text-[#EEB33B]">
                    Join our community
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col py-[40px]">
          <div className="flex flex-col gap-12">
            <div className="flex">
              <div className="flex flex-col w-[90%]">
                <div className="flex flex-col w-[90%]">
                  <p>Blog</p>
                  <p className="heading mt-3 text-[36px] font-[700]">
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
              <div className="flex">
                <button className="flex w-[15.5rem] max-h-[3rem] items-center rounded-[100px] px-[40px] py-[10px] justify-between border border-[#E8EABB] neutral">
                  View all <FiArrowUpRight />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 ">
              {/* Cards Here */}
              <div className="flex flex-grow w-full">
                <div className="bg-card w-full flex flex-col justify-between rounded-[24px] p-6">
                  <Image
                    src="/heroImage.png"
                    width={1000}
                    height={1000}
                    alt="person photo"
                    className="w-full h-[13.5rem] object-cover rounded-[20px]"
                  />
                  <div className="flex flex-col gap-4 flex-grow justify-center w-[80%]">
                    <h2 className="text-[24px] neutral">
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
                <div className="flex bg-card rounded-[20px] p-6">
                  <div className="flex flex-col gap-4 w-[80%]">
                    <h2 className="text-[24px] neutral">
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
                    className="w-[14.5rem] h-[10rem] rounded-[20px]"
                  />
                </div>
                <div className="flex gap-6">
                  <div className="flex bg-card rounded-[20px] p-6">
                    <div className="flex flex-col gap-4 w-[80%]">
                      <h2 className="text-[24px] neutral">
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
                    <div className="flex flex-col gap-4 w-[80%]">
                      <h2 className="text-[24px] neutral">
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
