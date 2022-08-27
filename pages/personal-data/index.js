import React, { useState, useEffect } from "react";
import Circle from "../../components/Circle";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

export default function PersonalData({ token }) {
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [tahunMasuk, setTahunMasuk] = useState("");
  const [idline, setIdLine] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (token) {
      axios
        .get(
          `https://api-tecinternship.herokuapp.com/api/get-user/?_id=${token}`
        )
        .then((res) => {
          setName(res.data.name);
          setEmail(res.data.email);
          setFakultas(res.data.fakultas);
          setJurusan(res.data.jurusan);
          setTahunMasuk(res.data.tahunMasuk);
          setIdLine(res.data.idline);
          setChecked(res.data.isPerwakilan);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://api-tecinternship.herokuapp.com/api/edit-user", {
        _id: token,
        name,
        fakultas,
        jurusan,
        tahunMasuk,
        idline,
        isPerwakilan: checked,
      })
      .then(() => {
        if (checked) {
          router.push("/registration");
        } else {
          axios
            .post("https://api-tecinternship.herokuapp.com/api/edit-payment", {
              pembayar: email,
              method: "",
              opsi: "",
              teman: [
                { name: "", email: "" },
                { name: "", email: "" },
              ],
              buktiPembayaran: "",
            })
            .then(() => {
              router.push("/registration");
            })
            .catch((err) => console.log(err));
          // setActive("3");
        }
      })
      .catch((err) => console.log(err));
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
                    <Circle active="1" order="1" />
                    <div className="h-0.5 w-full md:w-0.5 md:h-32 bg-[#525926]"></div>
                    <Circle order="2" />
                    <div className="h-0.5 w-full md:w-0.5 md:h-32 bg-[#525926]"></div>
                    <Circle order="3" />
                  </div>
                  <div className="flex flex-row md:flex-col justify-between text-xs sm:text-sm md:text-base">
                    <h1 className={"my-1"}>Data diri</h1>
                    <h1>Pembayaran</h1>
                    <h1>Konfirmasi</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade bg-white/10 backdrop-blur-lg rounded-xl shadow-xl  md:w-3/5 md:max-w-3xl">
              <div className="animate-fade">
                <form className="px-12 py-10" onSubmit={handleSubmit}>
                  <h1 className="text-2xl font-semibold">
                    Lengkapi Data Dirimu
                  </h1>
                  <h2 className="mt-2">
                    Lengkapi data diri untuk melakukan finalisasi akunmu.
                  </h2>

                  {/* Nama */}
                  <h1 className="mt-10">Nama Lengkap</h1>
                  <input
                    type="text"
                    className="mt-2 w-full md:w-4/5 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  {/* Fakultas */}
                  <h1 className="mt-4">Fakultas</h1>
                  <h2 className="text-xs font-extralight">Contoh: STEI, SBM</h2>
                  <input
                    type="text"
                    className="mt-2 w-full md:w-4/5 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
                    value={fakultas}
                    onChange={(e) => setFakultas(e.target.value)}
                    required
                  />

                  {/* Program Studi */}
                  <h1 className="mt-4">Program Studi</h1>
                  <h2 className="text-xs font-extralight">
                    Contoh: IF, TI, TPB
                  </h2>
                  <input
                    type="text"
                    className="mt-2 w-full md:w-4/5 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
                    value={jurusan}
                    onChange={(e) => setJurusan(e.target.value)}
                    required
                  />

                  {/* Tahun Masuk */}
                  <h1 className="mt-4">Tahun Masuk</h1>
                  <h2 className="text-xs font-extralight">Contoh: 2022</h2>
                  <input
                    type="text"
                    className="mt-2 w-full md:w-4/5 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
                    value={tahunMasuk}
                    onChange={(e) => setTahunMasuk(e.target.value)}
                    required
                  />

                  {/* ID LINE */}
                  <h1 className="mt-4">ID LINE</h1>
                  <input
                    type="text"
                    className="mt-2 w-full md:w-4/5 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
                    value={idline}
                    onChange={(e) => setIdLine(e.target.value)}
                    required
                  />

                  {/* Check box */}
                  <div className="flex items-center mt-8">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      checked={checked}
                      onChange={() => {
                        setChecked(!checked);
                      }}
                      className="w-4 h-4 bg-gray-100 rounded border-gray-300 focus:[#2F9685]"
                    />
                    <label className="ml-2">
                      Saya merupakan perwakilan pembayaran
                    </label>
                  </div>

                  <div className="mt-8 flex flex-row-reverse justify-end gap-2">
                    <input
                      type={"submit"}
                      value="NEXT"
                      className="px-8 md:px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] cursor-pointer"
                    />
                    <Link href="/auth">
                      <button className="px-8 md:px-12  py-2 rounded-xl text-md font-bold border">
                        BACK
                      </button>
                    </Link>
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
