import React, { useState } from "react";
import Register1 from "../../components/Auth/Register1";
import Register2 from "../../components/Auth/Register2";
import Register3 from "../../components/Auth/Register3";
import Circle from "../../components/Circle";
import Image from "next/image";
import Link from "next/link";

const PersonalData = () => {
  const [name, setName] = useState("");
  const [active, setActive] = useState("1");
  const [bukti, setBukti] = useState("");

  return (
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
        <div className="flex gap-2 justify-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl py-10">
            <h1 className="text-center text-2xl font-semibold">Registration</h1>

            <div className="p-12 flex">
              <div className="flex relative gap-4">
                <div className="flex flex-col items-center">
                  <Circle active={active} order="1" />
                  <div className="w-0.5 h-32 bg-[#525926]"></div>
                  <Circle active={active} order="2" />
                  <div className="w-0.5 h-32 bg-[#525926]"></div>
                  <Circle active={active} order="3" />
                </div>
                <div className="flex flex-col justify-between">
                  <div className={active === "1" && "my-1"}>Data diri</div>
                  <div className={active === "2" && "my-1"}>Pembayaran</div>
                  <div className={active === "3" && "my-1"}>Konfirmasi</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl">
            {active === "1" ? (
              <Register1 setActive={setActive} name={name} setName={setName} />
            ) : active === "2" ? (
              <Register2 setActive={setActive} name={name} />
            ) : (
              <Register3
                setActive={setActive}
                bukti={bukti}
                setBukti={setBukti}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
