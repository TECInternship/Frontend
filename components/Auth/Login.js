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
        `https://api-tecinternship.herokuapp.com/api/login/?email=${email}&password=${password}`
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
        alert("Wrong email or password!");
      });
  };

  const editPassword = (e) => {
    router.push("/edit-password");
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
            className="mt-1 w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none placeholder:text-gray-500"
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
            className="mt-1 w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none placeholder:text-gray-500"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <p className="text-gray-100">
            Lupa password?{" "}
            <span
              className="underline hover:cursor-pointer hover:text-blue-300"
              onClick={editPassword}
            >
              Ganti password
            </span>
          </p>
        </div>
        <div className="flex flex-row-reverse text-center py-6 mb-6 gap-2">
          <input
            type="submit"
            value="Login"
            className="px-12 py-2 rounded-xl text-md font-bold bg-[#BD142B] hover:bg-[#7E1918] cursor-pointer transition ease-in-out duration-300 border"
          />
          <Link href="/">
            <button className="px-12 py-2 rounded-xl text-md font-bold border cursor-pointer transition ease-in-out hover:bg-gray-600 duration-300">
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
