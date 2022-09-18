import React from "react";
import Image from "next/image";
import Link from "next/link";
import Countdown from "./Countdown";

const Hero = ({ token }) => {
  return (
    <div className="h-screen flex justify-center items-center flex-col ">
      <div className="sm:space-x-8 md:space-x-0 flex justify-center items-center flex-col sm:flex-row lg:flex-col lg:space-y-4 mb-10">
        <div className="space-y-4">
          <div className="flex flex-col items-center sm:items-start lg:items-center mb-16">
            <h1 className="text-center sm:text-left lg:text-center text-4xl font-BreeSerif md:text-5xl lg:text-6xl mb-4 tracking-widest">
              WELCOME TO TEC INTERNSHIP
            </h1>
            <h2 className="text-base sm:text-left md:text-xl lg:text-4xl font-BreeSerif tracking-widest">
              Global &bull; Enrich &bull; High Impact
            </h2>
          </div>

          {/* <div className="flex justify-center">
            {!token && (
              <Link href="/auth">
                <button className="bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] rounded-3xl px-4 py-2 hover:shadow-2xl font-bold text-xl md:text-2xl lg:text-3xl md:px-6 md:py-3 md:rounded-full"></button>
              </Link>
            )}
          </div> */}
        </div>
        <div className="flex justify-center sm:w-1/3 w-2/3">
          <img src="/assets_intern/logo.png" alt="logo" />
        </div>
      </div>
      {/* <Countdown /> */}
    </div>
  );
};

export default Hero;
