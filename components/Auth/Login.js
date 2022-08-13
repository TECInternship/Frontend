import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

const Login = ({ onClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `http://localhost:4000/api/login/?username=${username}&password=${password}`
      )
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="space-y-4" onSubmit>
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
      <div>
        <p className="text-gray-100">
          Belum punya akun?{" "}
          <span
            className="underline hover:text-gray-200 hover:cursor-pointer"
            onClick={onClick}
          >
            Buat di sini
          </span>
        </p>
      </div>
      <div className="text-center py-6 mb-6 space-x-2">
        <button className="px-12 py-2 rounded-xl text-md font-bold border cursor-pointer">
          <Link href="/">Back</Link>
        </button>
        <input
          type="submit"
          value="LOGIN"
          className="px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] cursor-pointer"
        />
      </div>
    </form>
  );
};

export default Login;
