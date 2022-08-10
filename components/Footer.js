import React from "react";
import { FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <div className="text-sm md:text-xl">Find us at</div>
      <div className="text-base md:text-3xl">
        <div className="flex space-x-2">
          <a href="https://instagram.com/tec.ohu" target="blank">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/ohutec2022" target="blank">
            <FaTwitter />
          </a>
          <a href="https://www.tiktok.com/@tec.ohu" target="blank">
            <FaTiktok />
          </a>
        </div>
        
      </div>
      <div className="flex flex-col justify-center items-center space-y-3">&copy; Copyright OHU TEC 2022</div>
    </div>
  );
};

export default Footer;
