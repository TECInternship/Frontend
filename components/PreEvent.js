import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SiGooglemeet, SiGooglecalendar } from "react-icons/si";
import Card from "./Card";

const PreEvent = () => {
  return (
    <section className="flex flex-col items-center mb-32 px-8 sm:px-0">
      <div className="flex justify-center items-center sm:space-x-8 flex-col sm:flex-row lg:space-y-4 mb-10">
        <div className="sm:w-1/3 mb-4">
          <img src="/pre.jpg" alt="logo" />
        </div>
        <div className="text-center md:w-1/2 space-y-4 lg:text-2xl px-3 py-5 justify-center relative z-10 bg-opacity-20 bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-2xl lg:text-3xl mb-5 font-Willywonka">
              Attend{"\u00a0\u00a0"}Our{"\u00a0\u00a0"}First{"\u00a0\u00a0"}
              Webinar!
            </h1>
            <h2 className="text-xl mb-5 md:text-base lg:text-xl">
              {'"'}Maximize Your Full Potential by Being a Studentpreneur{'"'}
            </h2>
            <div className="flex flex-col justify-between w-full md:text-sm lg:text-base">
              <div className="flex justify-center items-center gap-2">
                <SiGooglecalendar />
                <p>Saturday, 13 August 2022</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <SiGooglemeet />
                <p>via Zoom Meeting</p>
              </div>
            </div>
          </div>

          <button className="bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] sm:rounded-3xl px-4 py-2 border hover:shadow-2xl font-bold text-xl md:text-base lg:text-xl lg:px-6 lg:py-3 md:rounded-full">
            <Link href="https://www.bit.ly/RSVPOHUTEC1">
              <a target={"blank"}>RSVP NOW!</a>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreEvent;
