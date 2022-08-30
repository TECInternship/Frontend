import React from "react";
import Image from "next/image";
import Link from "next/link";
import Countdown from "./Countdown";

const Hero = ({ token }) => {
  return (
    <div className="h-screen flex justify-center items-center flex-col ">
      <div className="sm:space-x-8 lg:space-x-0 flex justify-center items-center flex-col sm:flex-row lg:flex-col lg:space-y-4 mb-10">
        <div className="sm:w-1/2 md:w-2/3 w-2/3">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-Willywonka md:text-5xl lg:text-6xl">
              TEC{"\u00a0\u00a0"}Internship{"\u00a0\u00a0"}2022
            </h1>
            <h2 className="text-base md:text-xl lg:text-3xl font-WorkSans font-bold ">
              Global &bull; Enrich &bull; High Impact
            </h2>
          </div>

          <div className="flex justify-center">
            {!token && (
              <Link href="/auth">
                <button className="bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] rounded-3xl px-4 py-2 hover:shadow-2xl font-bold text-xl md:text-2xl lg:text-3xl md:px-6 md:py-3 md:rounded-full">
                  Join Us!
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <Countdown />
    </div>
  );
};

export default Hero;
