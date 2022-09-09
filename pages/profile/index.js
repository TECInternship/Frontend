import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { AiOutlineLoading } from "react-icons/ai";

export default function Profile({ token }) {
  const [name, setName] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [tahunMasuk, setTahunMasuk] = useState("");
  const [nomortec, setNomorTEC] = useState("-");
  const [isVerified, setIsVerified] = useState(false);
  const [bukti, setBukti] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      if (token) {
        await axios
          .get(
            `https://api-tecinternship.herokuapp.com/api/get-user/?_id=${token}`
          )
          .then((res) => {
            setName(res.data.name);
            setFakultas(res.data.fakultas);
            setJurusan(res.data.jurusan);
            setTahunMasuk(res.data.tahunMasuk);
            setBukti(res.data.buktiPersyaratan);
            axios
              .get(
                `https://api-tecinternship.herokuapp.com/api/get-verified-user/?email=${res.data.email}`
              )
              .then((res) => {
                if (res.data) {
                  if (res.data.nomortec.length > 1) {
                    setIsVerified(true);
                  }
                  setNomorTEC(res.data.nomortec);
                }
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }
    };
    doFetch();
  }, []);
  return (
    <main className="h-screen w-screen bg-scroll bg-no-repeat bg-cover max-h-screen flex">
      <Image
        className="object-center object-cover pointer-events-none"
        src="/info1.png"
        alt="bg"
        layout="fill"
        // objectFit='cover'
        // objectPosition="center"
      />

      <div className="flex justify-between absolute w-full px-8 py-10">
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
      <div className="w-full justify-center flex items-center px-2">
        <div className="m-0">
          {name ? (
            <div className="animate-fade bg-white/10 backdrop-blur-lg rounded-3xl p-4 lg:p-6 2xl:p-10 flex flex-row">
              <div className="flex flex-col gap-2 font-thin text-[#F8F4EE] font-WorkSans text-xl lg:text-2xl p-2">
                Nama
                <h1 className="font-semibold mb-3">{name}</h1>
                Fakultas
                <h1 className="font-semibold mb-3">
                  {fakultas}/{jurusan}
                </h1>
                Nomor TEC
                <h1 className="font-semibold mb-3">{nomortec}</h1>
                Tahun Masuk ITB
                <h1 className="font-semibold mb-3">{tahunMasuk}</h1>
                Status Verifikasi
                <h1 className="font-semibold mb-3">
                  {isVerified ? (
                    <span className="rounded-full bg-[#24a314] px-3 py-1.5 text-[20px]">
                      Verified
                    </span>
                  ) : bukti ? (
                    <span className="rounded-full bg-[#8f6b07] px-3 py-1.5 text-[20px]">
                      Waiting
                    </span>
                  ) : !isVerified & !bukti ? (
                    <div className="group">
                      <span className="rounded-full bg-[#e72424] px-3 py-1.5 text-[20px]">
                        Not Verified
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </h1>
              </div>
              <div className=" flex flex-col justify-end object-right pl-10 space-y-60 py-0">
                <div className="flex justify-between">
                  <Image
                    className=""
                    src="/logo-glasses.png"
                    width={75}
                    height={40}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <AiOutlineLoading className="animate-spin" />
            </div>
          )}
        </div>
      </div>
      <div></div>
    </main>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
