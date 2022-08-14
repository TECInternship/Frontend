import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Register = ({ onClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasi, setKonfirmasi] = useState("");
  // const [nomortec, setNomorTec] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/api/get-all-users")
  //     .then((res) => {
  //       setNomorTec(res.data.length + 1);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (konfirmasi === password) {
      axios
        .post("http://localhost:4000/api/register", {
          // nomortec,
          username,
          password,
        })
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          window.location.reload();
        })
        .catch((err) => console.log(err));
    } else {
      alert("Password confirmation wrong!");
    }
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor=""
            className="text-gray-100 text-xl font-semibold ml-1"
          >
            Username
          </label>
          <input
            type="text"
            placeholder="Masukkan username"
            className="w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="">
          <label
            htmlFor=""
            className="text-gray-100 text-xl font-semibold ml-1"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Masukkan password"
            className="w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="">
          <label
            htmlFor=""
            className="text-gray-100 text-xl font-semibold ml-1"
          >
            Konfirmasi Password
          </label>
          <input
            type="password"
            placeholder="Konfirmasi password"
            className="w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none"
            onChange={(e) => setKonfirmasi(e.target.value)}
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
      </form>
      <div className="text-center py-6 mb-6 space-x-2">
        <Link href="/">
          <button className="px-12 py-2 rounded-xl text-md font-bold border cursor-pointer">
            Back
          </button>
        </Link>
        <Link href="/auth/registration">
          <button className="px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685]">
            REGISTER
          </button>
        </Link>
      </div>
    </>
  );
};

export default Register;
