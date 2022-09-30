import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { BsChevronDown } from "react-icons/bs";
import DropdownMenu from "./DropdownMenu";
import { useRouter } from "next/router";

const Navbar = ({ token }) => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const logout = () => {
    // localStorage.setItem("user", false);
    fetch("/api/logout", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    // setUser(false);
    router.push("/");
    alert("Log out success!");
  };

  useEffect(() => {
    const doFetch = async () => {
      if (token) {
        await axios
          .get(
            `https://api-tecinternship.herokuapp.com/api/get-user/?_id=${token}`
          )
          .then((res) => {
            setName(res.data.name);
          })
          .catch((err) => console.log(err));
      }
    };
    doFetch();
  }, []);

  return (
    <div className="flex justify-between absolute w-full px-8 md:px-16 items-center font-BreeSerif mt-10 md:mt-0">
      <div className="flex gap-2 cursor-pointer">
        <Link href={"/"}>
          <Image
            className=""
            src="/assets_intern/logo.png"
            width={65}
            height={65}
            alt="logo"
          />
        </Link>
      </div>
      {token ? (
        <div className="flex gap-12 items-center">
          <Link
            href="/"
            className="flex gap-2 sticky top-0 z-50 h-[50px] items-center backdrop-blur-sm shadow-lg rounded-full p-4 py-2 md:px-3 md:py-6 bg-opacity-20 border"
          >
            <span className="hidden md:flex cursor-pointer">Home</span>
          </Link>
          <Link
            href="/learning-modules"
            className="flex gap-2 sticky top-0 z-50 h-[50px] items-center backdrop-blur-sm shadow-lg rounded-full p-4 py-2 md:px-3 md:py-6 bg-opacity-20 border"
          >
            <span className="hidden md:flex cursor-pointer">Materi</span>
          </Link>
          <Link
            href="/presensi"
            className="flex gap-2 sticky top-0 z-50 h-[50px] items-center backdrop-blur-sm shadow-lg rounded-full p-4 py-2 md:px-3 md:py-6 bg-opacity-20 border"
          >
            <span className="hidden md:flex cursor-pointer">Presensi</span>
          </Link>
          <button
            className="flex gap-2 sticky top-0 z-50 h-[50px] items-center backdrop-blur-sm shadow-lg rounded-full p-4 py-2 md:px-3 md:py-6 bg-opacity-20 border"
            onClick={() => setOpen(!open)}
          >
            <CgProfile className="text-4xl" />
            {name.split(" ")[0].length <= 2
              ? name.split(" ").slice(0, 2).join(" ")
              : name.split(" ")[0]}
            <BsChevronDown
              className={open ? "transition -rotate-180" : "transition"}
            />
          </button>
          {open && <DropdownMenu logout={logout} name={name} />}
        </div>
      ) : (
        <Link href="/auth">
          <button className="flex sticky top-0 z-50 items-center backdrop-blur-sm shadow-lg rounded-3xl px-4 py-2 md:px-6 md:py-2 lg:text-xl bg-[#BD142B] hover:bg-[#7E1918] font-bold transition ease-in-out duration-300">
            Log in
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
