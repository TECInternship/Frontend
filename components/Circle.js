import React from "react";

const Circle = ({ active, order }) => {
  return (
    <div>
      {active === order ? (
        <div className="w-8 h-8 rounded-full bg-[#C1D75C]">
          <div className="w-8 h-8 -inset-0.5 blur opacity-75 rounded-full bg-[#C1D75C] text-center"></div>
        </div>
      ) : (
        <div className="w-6 h-6 rounded-full bg-[#C1D75C]"></div>
      )}{" "}
    </div>
  );
};

export default Circle;
