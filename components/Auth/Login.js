import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = ({ onClick }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api-tec-ohu.herokuapp.com/api/login/?email=${email}&password=${password}`
      )
      .then((res) => {
        // localStorage.setItem("user", res.data._id);
        fetch("/api/login", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: res.data._id }),
        });
        router.push("/");
        alert("Login success!");
      })
      .catch((err) => {
        alert("Wrong password!");
      });
  };

  return (
    <div className="animate-fade">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor=""
            className="text-gray-100 md:text-xl font-semibold ml-1"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Masukkan email"
            className="mt-1 w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="">
          <label
            htmlFor=""
            className="text-gray-100 md:text-xl font-semibold ml-1"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Masukkan password"
            className="mt-1 w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <p className="text-gray-100">
            Belum punya akun?{" "}
            <span
              className="underline hover:cursor-pointer hover:text-blue-300"
              onClick={onClick}
            >
              Buat di sini
            </span>
          </p>
        </div>
        <div className="flex flex-row-reverse text-center py-6 mb-6 gap-2">
          <input
            type="submit"
            value="LOGIN"
            className="px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:from-[#3ec4ae] 
          hover:to-[#1c6458] duration-300 border"
          />
          <Link href="/">
            <button className="px-12 py-2 rounded-xl text-md font-bold border cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-600 duration-300">
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
