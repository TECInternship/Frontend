import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import DropdownMenu from "./DropdownMenu";

const Navbar = ({ user, logout }) => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      axios
        .get(
          `http://206.189.199.207:4000/api/get-user/?_id=${localStorage.getItem(
            "user"
          )}`
        )
        .then((res) => {
          // setUser(res.data);
          setName(res.data.name);
          // setNomorTEC(res.data.nomortec);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="flex justify-between absolute w-full px-8">
      <div className="flex gap-2">
        <Image
          className=""
          src="/tecputih.png"
          width={50}
          height={50}
          alt="logo"
        />
        <Image
          className=""
          src="/text-logo.png"
          width={140}
          height={50}
          alt="logo"
        />
      </div>
      {user ? (
        <div className="flex gap-2">
          <button
            className="flex gap-2 sticky top-0 z-50 h-[50px] items-center backdrop-blur-sm shadow-lg rounded-full p-4 py-2 md:px-3 md:py-6 bg-opacity-20 border"
            onClick={() => setOpen(!open)}
          >
            <CgProfile className="text-4xl" />
            {name}
            <BsChevronDown
              className={open ? "transition -rotate-180" : "transition"}
            />
          </button>
          {open && <DropdownMenu logout={logout} name={name} />}
        </div>
      ) : (
        <Link href="/auth">
          <button className="flex sticky top-0 z-50 h-[50px] items-center backdrop-blur-sm shadow-lg sm:rounded-3xl px-4 py-2 md:px-6 md:py-3 lg:text-xl bg-clip-padding  bg-gradient bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] bg-opacity-20 font-bold">
            Log in
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
