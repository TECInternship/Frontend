import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between absolute w-full px-8">
      <Image
        className=""
        src="/text-logo.png"
        width={140}
        height={35}
        alt="logo"
      />
      <button className="sticky top-0 z-50 h-[50px] flex items-center backdrop-blur-sm shadow-lg sm:rounded-3xl px-6 bg-clip-padding border border-gray-200 bg-gradient bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] bg-opacity-20">
        Register
      </button>
    </div>
  );
};

export default Navbar;
