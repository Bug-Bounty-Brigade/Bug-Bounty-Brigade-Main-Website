import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";
import Image from "next/image";
import search from "../assets/search.svg"
import Link from "next/link";
import ShowBlogs from "@/components/ShowBlogs";
export const metadata: Metadata = {
  title: "Bug Bounty Brigade - Blogs",
  description: "See the latest blogs in Bug Bounty Brigade",
};
const Blog = () => {
  return (
    <PageLayout>
      <section className="w-full mx-auto">
        <h2 className="flex heading font-[700] text-[1.2rem] md:text-[36px] xl:text-[48px]">
          Discover Our Blogs to Unleash Cybersecurity Insights
        </h2>
        <p className="text-lg ">
          Dive into a world of hacking revelations, vulnerability discovery, and cutting-edge threat mitigation. Explore our thought-provoking articles, practical tips, and expert perspectives to stay ahead in the ever-evolving digital security landscape.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 mt-8 md:flex-row">
          <div className="relative md:w-9/12">
            <input type="text" className=" w-full bg-[#6C5B3F] rounded-full p-4 pl-12" placeholder="Search blogs by topic, author " />
            <Image src={search} width={20} height={20} alt="search icon" className="absolute top-5 left-4" />
          </div>
          <Link href="/blogs/createpost"> <button className="p-2 font-bold tracking-wide text-black transition duration-150 ease-in-out border border-red-300 rounded-xl bg-stone-500 hover:bg-stone-600 bg-gradient-to-r from-yellow-500 to-yellow-700 hover:bg-gradient-to-bl focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none">Create Post</button> </Link>
        </div>
      </section>
      <ShowBlogs />
    </PageLayout>
  );
};

export default Blog;
