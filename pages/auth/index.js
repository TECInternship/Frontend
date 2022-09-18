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
      <main className="flex h-screen w-screen justify-center max-h-screen relative bg-[url('../public/assets_intern/bg-texture1.png')] bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="hover:animate-bounce absolute hidden md:block top-0 left-[-100px] opacity-30">
            <Image
                className=""
                src="/assets_intern/laba2.png"
                alt="logo"
                width={300}
                height={400}
            />
        </div>
        <div className="hover:animate-bounce absolute hidden md:block invisible md:visible top-0 left-[80px] opacity-30">
            <Image
                className=""
                src="/assets_intern/laba2.png"
                alt="logo"
                width={250}
                height={250}
            />
        </div>
        <div className="hover:animate-bounce absolute hidden md:block invisible md:visible top-0 left-[230px] opacity-30">
            <Image
                className=""
                src="/assets_intern/laba2.png"
                alt="logo"
                width={250}
                height={250}
            />
        </div>
        <div className="hover:animate-bounce absolute hidden md:block invisible lg:visible top-0 left-[340px] opacity-30">
            <Image
                className=""
                src="/assets_intern/laba2.png"
                alt="logo"
                width={300}
                height={400}
            />
        </div>
        <div className="absolute hidden md:block w-[300px] h-[500px] md:w-[300px] md:h-[500px] xl:w-[300px] xl:h-[500px] 2xl:w-[300px] 2xl:h-[500px] top-0 right-[0px] opacity-40">
            <Image
                className=""
                src="/assets_intern/spider web vert.png"
                alt="logo"
                width={300}
                height={300}
            />
        </div>
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
