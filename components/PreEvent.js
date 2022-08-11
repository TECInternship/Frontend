import React from "react";
import Image from "next/image";
import Link from "next/link";

const PreEvent = () => {
  return (
    <div className="flex justify-center items-center sm:space-x-8 lg:space-x-0 h-screen flex-col sm:flex-row lg:flex-col lg:space-y-4 mb-10">
      <div className="sm:w-1/3 w-2/3">
        <a href="https://www.bit.ly/RSVPOHUTEC1" target="blank"><img src="/pre.jpg" alt="logo"/></a>
      </div>
    </div>
  );
};

export default PreEvent;
