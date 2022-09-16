import React, { useEffect } from "react";
import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";
import Icon from "../../public/assets/User_fill.png";
import Image from "next/image";
import Link from "next/link";
import Card from "../../components/Card.js";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home({ token }) {
  const [activeButton, setActiveButton] = useState("login");
  const router = useRouter();

  return (
    <div className="">
      <main className="flex h-screen w-screen justify-center max-h-screen relative">
        {/* <div className="bg-white h-36"> hahsah */}
        <div className="absolute left-2 top-2 px-16 py-10 z-10">
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
        </div>
        {/* </div> */}
        <div className="h-screen basis-0 hidden md:block md:basis-2/5"></div>
        <div className="h-screen basis-full md:basis-3/5 flex items-center">
          <div className="mx-auto space-y-8 sm:mt-0 ">
            {/* <Card Content={<img className="mx-auto hidden sm:flex" src={Icon.src} />} /> */}
            <div className="bg-white/30 backdrop-blur-xl rounded-3xl w-auto max-w-full shadow-2xl">
              <div className=" text-center text-gray-100 pt-4">
                <button
                  className={`text-xl md:text-2xl font-extrabold px-6 py-2 mx-2 ${
                    activeButton === "login"
                      ? "border-b-white border-b-[3px] border-solid"
                      : ""
                  }`}
                  onClick={() => setActiveButton("login")}
                >
                  Login
                </button>
                {/* <button
                  className={`text-xl md:text-2xl font-extrabold px-6 py-2 mx-2 ${
                    activeButton === "register"
                      ? "border-b-white border-b-[3px] border-solid"
                      : ""
                  }`}
                  onClick={() => setActiveButton("register")}
                >
                  Register
                </button> */}
              </div>
              <div className="py-4 px-8">
                {activeButton === "login" ? (
                  <Login onClick={() => setActiveButton("register")} />
                ) : (
                  <Register onClick={() => setActiveButton("login")} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
