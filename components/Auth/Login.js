import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = ({ onClick }) => {
  const router = useRouter();

  const [route, setRoute] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `http://localhost:4000/api/login/?email=${email}&password=${password}`
      )
      .then((res) => {
        localStorage.setItem("user", res.data._id);
        router.push("/");
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="" className="text-gray-100 text-xl font-semibold ml-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Masukkan email"
          className="w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
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
      <div className="flex flex-row-reverse text-center py-6 mb-6 gap-2">
        <input
          type="submit"
          value="LOGIN"
          className="px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] cursor-pointer"
        />
        <Link href="/">
          <button className="px-12 py-2 rounded-xl text-md font-bold border cursor-pointer">
            Back
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Login;
