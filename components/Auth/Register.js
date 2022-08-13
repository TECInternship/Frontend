import React from "react";
import Link from "next/link";

const Register = ({ onClick }) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="" className="text-gray-100 text-xl font-semibold ml-1">
          Username
        </label>
        <input
          type="text"
          placeholder="Masukkan username"
          className="w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none"
        />
      </div>
      <div className="">
        <label htmlFor="" className="text-gray-100 text-xl font-semibold ml-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Masukkan password"
          className="w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none"
        />
      </div>
      <div className="">
        <label htmlFor="" className="text-gray-100 text-xl font-semibold ml-1">
          Konfirmasi
        </label>
        <input
          type="password"
          placeholder="Konfirmasi password"
          className="w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none"
        />
      </div>
      <div>
        <p className="text-gray-100">
          Sudah punya akun?{" "}
          <span
            className="underline hover:text-gray-200 hover:cursor-pointer"
            onClick={onClick}
          >
            Login di sini
          </span>
        </p>
      </div>
      <div className="text-space py-6 mb-6 space-x-2">
        <button className="px-12 py-2 rounded-xl text-md font-bold border cursor-pointer">
          <Link href="/">Back</Link>
        </button>
        <button className="px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685]">
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Register;
