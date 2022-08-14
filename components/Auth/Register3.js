import React from "react";
import Link from "next/link";

const Register3 = ({ setActive }) => {
  return (
    <>
      <div className="container px-16 mt-24 flex justify-end">
        <button
          className="px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685]"
          onClick={() => setActive("2")}
        >
          BACK
        </button>
        <Link href="/">
          <button className="px-12 py-2 rounded-xl text-md font-bold border">
            FINISH
          </button>
        </Link>
      </div>
    </>
  );
};

export default Register3;
