import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const Register = ({ token }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasi, setKonfirmasi] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      if (token) {
        await axios
          .get(
            `https://api-tecinternship.herokuapp.com/api/get-user/?_id=${token}`
          )
          .then((res) => {
            setEmail(res.data.email);
          })
          .catch((err) => console.log(err));
      }
    };
    doFetch();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api-tecinternship.herokuapp.com/api/login/?email=${email}&password=${oldPassword}`
      )
      .then((res) => {
        if (password.length >= 8) {
          if (konfirmasi === password) {
            axios
              .post(
                `https://api-tecinternship.herokuapp.com/api/edit-password/?email=${email}&password=${password}`
              )
              .then((res) => {
                alert("Password changed!");
                if (token) {
                  router.push("/");
                } else {
                  router.push("/auth");
                }
              })
              .catch((err) => {
                console.log(err);
                alert("Invalid email!");
              });
            // .catch((err) => console.log(err));
          } else {
            alert("Passwords did not match!");
          }
        } else {
          alert("Password should be minimum 8 characters!");
        }
      })
      .catch((err) => alert("Email or password is wrong!"));
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
              value={email}
              placeholder="Masukkan email"
              className="w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none placeholder:text-gray-500"
              onChange={(e) => {
                if (!token) {
                  setEmail(e.target.value);
                }
              }}
              disabled={token}
            />
          </div>
          <div className="">
            <label
              htmlFor=""
              className="text-gray-100 md:text-xl font-semibold ml-1"
            >
              Password Lama
            </label>
            <input
              type="password"
              required
              placeholder="Masukkan password"
              className="w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none placeholder:text-gray-500"
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="">
            <label
              htmlFor=""
              className="text-gray-100 md:text-xl font-semibold ml-1"
            >
              Password Baru
            </label>
            <input
              type="password"
              required
              placeholder="Masukkan password"
              className="w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none placeholder:text-gray-500"
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
              placeholder="Konfirmasi password baru"
              className="w-full h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none placeholder:text-gray-500"
              onChange={(e) => setKonfirmasi(e.target.value)}
            />
          </div>

          <div className="text-center lg:mb-6 space-x-2 lg:py-6 ">
            <Link href={token ? "/" : "/auth"}>
              <button className="px-12 py-2 rounded-xl text-md font-bold border cursor-pointer transition ease-in-out hover:bg-gray-600 duration-300">
                Back
              </button>
            </Link>
            <input
              type="submit"
              value="Submit"
              className="px-12 py-2 rounded-xl text-md font-bold bg-[#008140] hover:bg-[#00B526] cursor-pointer transition ease-in-out duration-300 border"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
