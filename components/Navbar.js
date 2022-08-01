import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div
        className="sticky top-0 z-50 h-[80px] p-2 flex items-center backdrop-blur-sm shadow-lg sm:rounded-3xl px-16 bg-clip-padding border border-gray-200 bg-gradient bg-gradient-to-br from-gray-300 to-transparent 
        bg-opacity-20"
      >
        <div className="">
          <Image
            className=""
            src="/logo-glasses.png"
            width={70}
            height={35}
            alt="logo"
          ></Image>
        </div>
        <div className="flex justify-end flex-grow space-x-6">
          <a className="">Home</a>
          <a className="">About</a>
          <a className="">Login</a>{" "}
        </div>
      </div>
    </>
  );
};

export default Navbar;
