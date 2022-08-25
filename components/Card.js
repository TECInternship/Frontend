import React from "react";

const Card = ({ Content }) => {
  return (
    <div className="container hidden sm:flex items-center justify-center md:w-full mx-auto">
      <div className="text-center space-y-4 lg:text-2xl px-5 py-5 justify-center relative z-10 bg-opacity-20 bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl">
        {Content}
      </div>
    </div>
  );
};

export default Card;
