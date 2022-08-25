import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const Register = ({ onClick }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
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

    if (password.length >= 8) {
      if (konfirmasi === password) {
        axios
          .post("http://localhost:4000/api/register", {
            // nomortec,
            email,
            password,
          })
          .then((res) => {
            localStorage.setItem("user", res.data._id);
            router.push("/personal-data");
            // window.location.reload();
          })
          .catch((err) => alert("Invalid email!"));
      } else {
        alert("Passwords did not match!");
      }
    } else {
      alert("Password should be minimum 8 characters!");
    }
  };

  return (
    <>
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
              type="text"
              required
              placeholder="Masukkan email"
              className="w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none"
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
              required
              placeholder="Masukkan password"
              className="w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-gray-100 md:text-xl font-semibold ml-1"
            >
              Konfirmasi Password
            </label>
            <input
              type="password"
              required
              placeholder="Konfirmasi password"
              className="w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none"
              onChange={(e) => setKonfirmasi(e.target.value)}
            />
          </div>
          <div>
            <p className="text-gray-100">
              Sudah punya akun?{" "}
              <span
                className="underline hover:text-blue-300 hover:cursor-pointer"
                onClick={onClick}
              >
                Login di sini
              </span>
            </p>
          </div>
          <div className="text-center lg:mb-6 space-x-2 lg:py-6 ">
            <Link href="/">
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-600 duration-300 px-12 py-2 my-4 lg:my-0 rounded-xl text-md font-bold border cursor-pointer">
                Back
              </button>
            </Link>
            <input
              disabled={email.length < 8}
              type={"submit"}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:from-[#3ec4ae] 
            hover:to-[#1c6458] duration-300 px-10 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] cursor-pointer"
              value={"REGISTER"}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
