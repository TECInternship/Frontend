import React from "react";

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
            className="py-2 px-6 bg-[#BD142B] hover:bg-[#7E1918] rounded-xl disabled:bg-[#504A4A]"
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
