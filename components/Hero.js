import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex justify-center items-center sm:space-x-8 lg:space-x-0 font-bold h-screen flex-col sm:flex-row lg:flex-col lg:space-y-4">
      <div className="sm:w-1/3 w-2/3">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="space-y-4">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-Willywonka md:text-4xl lg:text-6xl">
            TEC{"\u00a0\u00a0"}Internship{"\u00a0\u00a0"}2022
          </h1>
          <h2 className="text-sm md:text-base lg:text-3xl font-WorkSans">
            Global &bull; Enrich &bull; High Impact
          </h2>
        </div>
        <div className="flex justify-center">
          <button className="bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] sm:rounded-3xl px-4 py-2 md:text-xl lg:text-3xl border hover:shadow-2xl">
            <Link href="/register">Join Us!</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
