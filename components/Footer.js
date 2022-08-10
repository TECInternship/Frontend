import React from "react";
import { FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <div className="text-sm md:text-xl">Find us at</div>
      <div className="text-base md:text-xl">
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
    </div>
  );
};

export default Footer;
