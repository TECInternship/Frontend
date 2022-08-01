import React from "react";

const Card = () => {
  return (
    <div className="container mr-auto flex items-center justify-center">
      <div
        className="px-3 py-5 grid grid-cols-2 grid-rows-4 justify-center 
        relative z-10 bg-gradient bg-gradient-to-br from-gray-300 to-transparent w-1/2 
        bg-opacity-20 h-80 rounded-md shadow-md card"
      ></div>
    </div>
  );
};

export default Card;
