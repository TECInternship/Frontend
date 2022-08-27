import React, { useState, useEffect } from "react";
import Register2 from "../../components/Auth/Register2";
import Register3 from "../../components/Auth/Register3";
import Circle from "../../components/Circle";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function Registration({ token }) {
  const [active, setActive] = useState("2");
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (token) {
      axios
        .get(`https://api-tec-ohu.herokuapp.com/api/get-user/?_id=${token}`)
        .then((res) => {
          setEmail(res.data.email);
          setChecked(res.data.isPerwakilan);
          setActive("2");
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="bg-[url('../public/assets/bg.png')] bg-no-repeat bg-cover bg-left-bottom bg-fixed">
      <div className="flex justify-center min-h-screen">
        <div className="w-full">
          <div className="flex justify-start gap-2 cursor-pointer px-8 py-10">
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

          <div className="animate-fade flex flex-col md:flex-row gap-4 lg:gap-10 px-6 sm:px-10 justify-center pb-10">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl py-10 md:w-1/3 md:max-w-sm">
              <h1 className="text-center text-2xl font-semibold">
                Registration
              </h1>
              <div className="pt-6 md:p-12 flex justify-center">
                <div className="flex flex-col md:flex-row relative gap-4 w-full mx-2">
                  <div className="flex flex-row md:flex-col justify-center items-center pl-2 pr-4 md:px-0 gap-auto">
                    <Circle active={active} order="1" />
                    <div className="h-0.5 w-full md:w-0.5 md:h-32 bg-[#525926]"></div>
                    <Circle active={active} order="2" className="self-center" />
                    <div className="h-0.5 w-full md:w-0.5 md:h-32 bg-[#525926]"></div>
                    <Circle active={active} order="3" />
                  </div>
                  <div className="flex flex-row md:flex-col justify-between text-xs sm:text-sm md:text-base">
                    <div className={active === "1" && "my-1"}>Data diri</div>
                    <div
                      className={
                        active === "2" &&
                        "my-1 absolute w-full text-center md:relative md:w-auto md:text-left"
                      }
                    >
                      Pembayaran
                    </div>
                    <div
                      className={
                        active === "3" &&
                        "my-1 absolute w-full text-right md:relative md:w-auto md:text-left"
                      }
                    >
                      Konfirmasi
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade bg-white/10 backdrop-blur-lg rounded-xl shadow-xl  md:w-3/5 md:max-w-3xl">
              {active === "2" ? (
                <Register2 setActive={setActive} email={email} />
              ) : active === "3" ? (
                <Register3
                  token={token}
                  setActive={setActive}
                  checked={checked}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
