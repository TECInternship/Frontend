import React from "react";
import Link from "next/link";

const ModuleCard = ({ title, description, link }) => {
  return (
    <>
      <div className="relative mt-8 px-6 py-3 mx-10  bg-opacity-20 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col">
        <h1 className="text-4xl">{title}</h1>
        <p className="text-md mt-2">{description}</p>
        <div className="mb-10">
          <button className="bg-[#58BF75] hover:bg-[#3aa257] rounded-xl py-1 px-6 text-xl absolute bottom-3 right-5">
            <Link href={link} target="blank">
              Open
            </Link>
          </button>
        </div>

      </div>
    </>
  );
};

export default ModuleCard;
