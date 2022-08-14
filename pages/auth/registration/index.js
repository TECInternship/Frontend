import React, { useState } from "react";
import Register1 from "../../../components/Auth/Register1";
import Register2 from "../../../components/Auth/Register2";
import Register3 from "../../../components/Auth/Register3";
import Circle from "../../../components/Circle";

const Registration = () => {
  const [active, setActive] = useState("1");
  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex">
        <div className="bg-white/10 backdrop-blur-lg h-[707px] w-[325px] rounded-xl mt-[105px] ml-[56px] shadow-xl">
          <div className="pt-10">
            <div className="ml-12 text-2xl font-semibold">Registration</div>

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
        </div>

        <div className="bg-white/10 backdrop-blur-lg  h-[707px] w-[897px] rounded-xl mt-[105px] ml-[56px] shadow-xl">
          {active === "1" ? (
            <Register1 setActive={setActive} />
          ) : active === "2" ? (
            <Register2 setActive={setActive} />
          ) : (
            <Register3 setActive={setActive} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
