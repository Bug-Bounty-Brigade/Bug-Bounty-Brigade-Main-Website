import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex py-4">
      <nav className="w-full flex px-[10px] rounded-[100px] py-4 bg-[#40392F]">
        <div className="flex w-full">
          <div className="flex w-full items-center justify-between">
            <div>
              <h2>Bug Bounty Brigade</h2>
            </div>
            <ul className="flex gap-16 items-center">
              <li>Home</li>
              <li>Events</li>
              <li>Blogs</li>
              <li>About us</li>
              <button className="py-[12px] font-[400] px-[40px] rounded-full text-black bg-[#EEB33B]">
                Join our community
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
