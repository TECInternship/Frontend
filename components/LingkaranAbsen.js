import Router, { useRouter } from "next/router";
import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

const LingkaranAbsen = ({ active, day, link }) => {
  return (
    <div>
      <div className="w-5/6 h-5/6 xl:w-full xl:h-full flex mx-auto pb-12 relative">
        {active ? (
          <img src="/assets/portal-presensi-aktif.png" alt="" />
        ) : (
          <img src="/assets/portal-presensi.png" alt="" />
        )}
        <div className="text-center absolute bottom-0 left-0 right-0 content-center text-3xl xl:text-4xl">
          <button
            className="py-2 px-6 disabled:bg-[#BD142B] transition ease-in-out duration-300 border disabled:cursor-not-allowed rounded-xl bg-[#008140] hover:bg-[#00B526]"
            disabled={!active}
          >
            <a href={link}>Day {day}</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LingkaranAbsen;
