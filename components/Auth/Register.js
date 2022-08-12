import React from "react";

const Register = ({ onClick }) => {
  return (
    <>
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
      <div className="my-4">
        <label htmlFor="" className="text-gray-100 text-xl font-semibold ml-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Masukkan password"
          className="w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none"
        />
      </div>
      <div className="mb-4">
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
      <div className="text-right py-6 mb-6">
        <button className="px-12 py-2 bg-white rounded-xl text-red-700 text-md font-bold hover:bg-red-700 hover:text-gray-100">
          REGISTER
        </button>
      </div>
    </>
  )
}

export default Register
