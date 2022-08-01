import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center space-x-24 font-bold h-screen">
      <Image
        className=""
        src="/logo.png"
        width={500}
        height={500}
        layout="fixed"
        alt="asa"
      />
      <div className="space-y-10">
        <div className="space-y-4">
          <h1 className="text-7xl font-Willywonka">
            TEC{"\u00a0\u00a0"}Internship{"\u00a0\u00a0"}2022
          </h1>
          <h2 className="text-5xl font-WorkSans">
            Global &bull; Enrich &bull; High Impact
          </h2>
        </div>
        <button className="bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] rounded-full px-6 py-3 text-2xl border hover:shadow-2xl">
          Join Us!
        </button>
      </div>
    </div>
  );
};

export default Hero;
