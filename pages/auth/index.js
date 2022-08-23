import React from "react";
import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";
import Icon from "../../public/assets/User_fill.png";
import Image from "next/image";
import Link from "next/link";
import Card from "../../components/Card.js";
import { useState } from "react";

const Home = () => {
  const [activeButton, setActiveButton] = useState("login");

  return (
    <>
      <main className="h-screen w-screen bg-red bg-cover justify-center max-h-screen flex relative">
        <div className="absolute left-2 top-2 px-8 py-10 z-10">
          <div className="flex gap-2 cursor-pointer">
            <Link href={"/"}>
              <Image
                className=""
                src="/tecputih.png"
                width={50}
                height={50}
                alt="logo"
              />
            </Link>
            <Link href={"/"}>
              <Image
                className=""
                src="/text-logo.png"
                width={140}
                height={50}
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="h-screen basis-0 hidden md:block md:basis-2/5"></div>
        <div className="h-screen basis-full md:basis-3/5 flex items-center">
          <div className="mx-auto space-y-8">
            <Card Content={<img className="mx-auto hidden sm:flex" src={Icon.src} />} />
            <div className="bg-white/30 backdrop-blur-xl rounded-3xl w-auto max-w-full shadow-2xl">
              <div className="text-center text-gray-100 pt-4">
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
                <button
                  className={`text-xl md:text-2xl font-extrabold px-6 py-2 mx-2 ${
                    activeButton === "register"
                      ? "border-b-white border-b-[3px] border-solid"
                      : ""
                  }`}
                  onClick={() => setActiveButton("register")}
                >
                  Register
                </button>
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
    </>
  );
};

export default Home;
