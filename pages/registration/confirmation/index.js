import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Circle from "../../../components/Circle";
import Image from "next/image";
import Link from "next/link";

export default function Registration({ token }) {
  const [checked, setChecked] = useState(false);
  const [link, setLink] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (token) {
      axios
        .get(
          `https://api-tecinternship.herokuapp.com/api/get-user/?_id=${token}`
        )
        .then((res) => {
          setChecked(res.data.isPerwakilan);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (token) {
      axios
        .get(
          `https://api-tecinternship.herokuapp.com/api/get-user/?_id=${token}`
        )
        .then((res) => {
          setLink(res.data.buktiPersyaratan);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (token) {
      axios
        .post("https://api-tecinternship.herokuapp.com/api/edit-user", {
          _id: token,
          buktiPersyaratan: link,
        })
        .then(() => {
          router.push("/");
        })
        .catch((err) => console.log(err));
    }
  };

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
                    <Circle order="1" />
                    <div className="h-0.5 w-full md:w-0.5 md:h-32 bg-[#525926]"></div>
                    <Circle order="2" className="self-center" />
                    <div className="h-0.5 w-full md:w-0.5 md:h-32 bg-[#525926]"></div>
                    <Circle active="3" order="3" />
                  </div>
                  <div className="flex flex-row md:flex-col justify-between text-xs sm:text-sm md:text-base">
                    <h1>Data diri</h1>
                    <h1>Pembayaran</h1>
                    <h1
                      className={
                        "my-1 absolute w-full text-center md:relative md:w-auto md:text-left"
                      }
                    >
                      Konfirmasi
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl py-10 md:w-3/5 md:max-w-3xl">
              <div className="animate-fade">
                <form className="px-12 py-10" onSubmit={handleSubmit}>
                  <div className="text-2xl font-semibold">Konfirmasi</div>
                  <div className="mt-2">
                    <p>
                      Sebagai bukti kelengkapan persyaratan, kamu diharuskan
                      menyertakan bukti yang dikumpulkan dalam folder Google
                      Drive.<br></br>
                      JANGAN LUPA SIAPKAN PERSYARATAN DI BAWAH INII:<br></br>
                      Persyaratan dapat diakses pada link berikut :{" "}
                      <Link
                        href="https://bit.ly/GuidebookOHU_TEC"
                        className="underline hover:cursor-pointer hover:text-blue-300"
                      >
                        <p className="underline hover:cursor-pointer hover:text-blue-300">
                          https://bit.ly/PersyaratanTEC
                        </p>
                      </Link>
                      <br />
                      1. Bukti screenshot Twibbon TEC Internship 2022 kamu yang
                      telah di post di Instagram kamu. <br></br>
                      2. Bukti screenshot poster TEC Internship 2022 yang telah
                      kamu bagikan di Instagram story kamu dan tag @tec.ohu
                      <br></br>
                      3. Bukti screenshot follow Instagram OHU TEC 2022
                      <Link
                        href="https://www.instagram.com/tec.ohu/"
                        className="underline hover:cursor-pointer hover:text-blue-300"
                      >
                        <p className="underline hover:cursor-pointer hover:text-blue-300">
                          https://www.instagram.com/tec.ohu/
                        </p>
                      </Link>{" "}
                      <br></br>
                      4. Bukti follow Instagram Study Board Education{" "}
                      <Link
                        href="https://www.instagram.com/studyboardeducation/"
                        className="underline hover:cursor-pointer hover:text-blue-300"
                      >
                        <p className="underline hover:cursor-pointer hover:text-blue-300">
                          https://www.instagram.com/studyboardeducation/
                        </p>
                      </Link>
                      <br></br>
                      Tata cara bisa di cek lagi{" "}
                      <Link href="https://bit.ly/PersyaratanTEC">
                        <p className="underline hover:cursor-pointer hover:text-blue-300">
                          https://bit.ly/GuidebookOHU_TEC
                        </p>
                      </Link>
                      <br />
                      <b>* Pastikan Instagram kamu tidak di private yaaa!*</b>
                    </p>
                  </div>

                  {/* Nama */}
                  <h1 className="mt-10">Link Google Drive</h1>
                  <input
                    type="text"
                    className="mt-2 w-full md:w-4/5 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
                    value={link}
                    placeholder="https://drive.google.com/drive/folder/..."
                    onChange={(e) => setLink(e.target.value)}
                    required
                  />
                  <div className="mt-16 flex flex-row-reverse justify-end gap-2">
                    <input
                      type={"submit"}
                      value="FINISH"
                      className="px-8 md:px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:from-[#3ec4ae] 
                      hover:to-[#1c6458] duration-300 border"
                    />
                    <div
                      className="px-8 md:px-12 py-2 rounded-xl text-md font-bold border transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-600 duration-300 cursor-pointer"
                      onClick={() => {
                        if (checked) {
                          router.push("/registration/payment");
                        } else {
                          router.push("/registration/personal-data");
                        }
                      }}
                    >
                      BACK
                    </div>
                  </div>
                </form>
              </div>
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
