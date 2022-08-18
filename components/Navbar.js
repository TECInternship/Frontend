import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ user, logout }) => {
  return (
    <div className="flex justify-between absolute w-full px-8">
      <div className="flex gap-2">
        <Image
          className=""
          src="/tecputih.png"
          width={50}
          height={50}
          alt="logo"
        />
        <Image
          className=""
          src="/text-logo.png"
          width={140}
          height={50}
          alt="logo"
        />
      </div>
      {user ? (
        <div className="flex gap-2">
          <Link href="/profile">
            <button className="flex sticky top-0 z-50 h-[50px] items-center backdrop-blur-sm shadow-lg sm:rounded-3xl px-4 py-2 md:px-6 md:py-3 lg:text-xl bg-opacity-20 font-bold border">
              Profile
            </button>
          </Link>
          <button
            className="flex sticky top-0 z-50 h-[50px] items-center backdrop-blur-sm shadow-lg sm:rounded-3xl px-4 py-2 md:px-6 md:py-3 lg:text-xl bg-clip-padding  bg-gradient bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] bg-opacity-20 font-bold"
            onClick={logout}
          >
            Log out
          </button>
        </div>
      ) : (
        <Link href="/auth">
          <button className="flex sticky top-0 z-50 h-[50px] items-center backdrop-blur-sm shadow-lg sm:rounded-3xl px-4 py-2 md:px-6 md:py-3 lg:text-xl bg-clip-padding  bg-gradient bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] bg-opacity-20 font-bold">
            Log in
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
