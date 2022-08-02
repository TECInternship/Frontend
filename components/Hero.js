import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center md:space-x-12 lg:space-x-0 font-bold h-screen flex-col sm:flex-row lg:flex-col lg:space-y-4">
      <div className="sm:w-1/3 w-2/3">
        <img
          src="/logo.png"
          layout="fill"
          alt="logo"
          sizes="(min-width:600px) 25vw, 100vw"
        />
      </div>
      <div className="space-y-8 md:space-y-4">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-Willywonka md:text-4xl lg:text-6xl">
            TEC{"\u00a0\u00a0"}Internship{"\u00a0\u00a0"}2022
          </h1>
          <h2 className="text-sm md:text-base lg:text-3xl font-WorkSans">
            Global &bull; Enrich &bull; High Impact
          </h2>
        </div>
        <div className="flex justify-center">
          <button className="bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] sm:rounded-3xl px-2 py-1 md:text-xl lg:text-3xl lg:px-4 lg:py-2 border hover:shadow-2xl">
            Join Us!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
