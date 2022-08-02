import React from "react";

const Card = ({ Content }) => {
  return (
    <div className="container mr-auto flex items-center justify-center">
      <div className="lg:text-2xl px-3 py-5 justify-center relative z-10 bg-gradient bg-gradient-to-br from-gray-300 to-transparent bg-opacity-20 rounded-lg shadow-2xl card border">
        {Content}
      </div>
    </div>
  );
};

export default Card;
