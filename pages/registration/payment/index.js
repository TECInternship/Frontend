import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Circle from "../../../components/Circle";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";

export default function Registration({ token }) {
  const [method, setMethod] = useState("");
  const [opsi, setOpsi] = useState("");
  const [teman1, setTeman1] = useState("");
  const [email1, setEmail1] = useState("");
  const [teman2, setTeman2] = useState("");
  const [email2, setEmail2] = useState("");
  const [teman3, setTeman3] = useState("");
  const [email3, setEmail3] = useState("");
  const [bukti, setBukti] = useState("");
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [loaded, setLoaded] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (token) {
      axios
        .get(
          `https://api-tecinternship.herokuapp.com/api/get-user/?_id=${token}`
        )
        .then((res) => {
          setEmail(res.data.email);
          setChecked(res.data.isPerwakilan);
          const doFetch = async () => {
            await axios
              .get(
                `https://api-tecinternship.herokuapp.com/api/get-payment/?pembayar=${res.data.email}`
              )
              .then((res) => {
                setMethod(res.data.method);
                setOpsi(res.data.opsi);
                setTeman1(res.data?.teman[0]?.name);
                setEmail1(res.data.teman[0]?.email);
                setTeman2(res.data.teman[1]?.name);
                setEmail2(res.data.teman[1]?.email);
                setTeman3(res.data.teman[2]?.name);
                setEmail3(res.data.teman[2]?.email);
                setBukti(res.data.buktiPembayaran);
                setLoaded(true);
              })
              .catch((err) => console.log(err));
          };

          doFetch();
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleChange = (e) => {
    setMethod(e.target.value);
    setTeman1("");
    setEmail1("");
    setTeman2("");
    setEmail2("");
    setTeman3("");
    setEmail3("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (opsi && method) {
      axios
        .get(
          `https://api-tecinternship.herokuapp.com/api/get-payment/?pembayar=${email}`
        )
        .then((res) => {
          if (res.data) {
            axios
              .post(
                "https://api-tecinternship.herokuapp.com/api/edit-payment",
                {
                  pembayar: email,
                  method,
                  opsi,
                  teman: [
                    { name: teman1, email: email1 },
                    { name: teman2, email: email2 },
                    { name: teman3, email: email3 },
                  ],
                  buktiPembayaran: bukti,
                }
              )
              .then(() => {
                router.push("/registration/confirmation");
              })
              .catch((err) => console.log(err));
          } else {
            axios
              .post("https://api-tecinternship.herokuapp.com/api/payment", {
                pembayar: email,
                method,
                opsi,
                teman: [
                  { name: teman1, email: email1 },
                  { name: teman2, email: email2 },
                  { name: teman3, email: email3 },
                ],
                buktiPembayaran: bukti,
              })
              .then((res) => {
                router.push("/registration/confirmation");
                // console.log(res);
                // window.location.reload();
              })
              .catch((err) => alert(err));
          }
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
                    <Circle active="2" order="2" className="self-center" />
                    <div className="h-0.5 w-full md:w-0.5 md:h-32 bg-[#525926]"></div>
                    <Circle order="3" />
                  </div>
                  <div className="flex flex-row md:flex-col justify-between text-xs sm:text-sm md:text-base">
                    <h1>Data diri</h1>
                    <h1
                      className={
                        "my-1 absolute w-full text-center md:relative md:w-auto md:text-left"
                      }
                    >
                      Pembayaran
                    </h1>
                    <h1>Konfirmasi</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade bg-white/10 backdrop-blur-lg rounded-xl shadow-xl  md:w-3/5 md:max-w-3xl">
              <div className="animate-fade h-full">
                {loaded ? (
                  <>
                    <form
                      className="px-12 py-10 h-full"
                      onSubmit={handleSubmit}
                    >
                      <h1 className="text-2xl font-semibold">
                        Lakukan Pembayaran
                      </h1>
                      <h2 className="mt-2 text-justify">
                        Untuk menjadi intern resmi, kamu diharuskan membayar
                        biaya registrasi.
                        <br></br>Setiap nominal yang akan dibayarkan harus
                        menambahkan kode unik yang disesuaikan dengan platform
                        pembayaran yang digunakan Contoh : Memilih paket 1 dan
                        melakukan transfer melalui DANA maka nominal transfer
                        yaitu Rp50.001,00
                      </h2>
                      {/* Tipe Pembayaran */}
                      <h2 className="mt-10">Tipe Pembayaran</h2>
                      <select
                        className="block mt-2 w-full md:w-4/5 p-3 text-white bg-white/20 backdrop-blur-none rounded-2xl transition ease-in-out focus:outline-none"
                        required
                        onChange={handleChange}
                        defaultValue={method}
                      >
                        <option
                          selected={method === null}
                          value={null}
                          className="text-black"
                        >
                          Pilih Tipe Pembayaran
                        </option>
                        <option
                          selected={method === "Single"}
                          value={"Single"}
                          className="text-black"
                        >
                          Single Rp50.000/orang
                        </option>
                        <option
                          selected={method === "Double"}
                          value={"Double"}
                          className="text-black"
                        >
                          Double Rp45.000/orang
                        </option>
                        <option
                          selected={method === "Triple"}
                          value={"Triple"}
                          className="text-black"
                        >
                          Triple Rp40.000/orang
                        </option>
                        <option
                          selected={method === "Quadruple"}
                          value={"Quadruple"}
                          className="text-black"
                        >
                          Quadruple Rp35.000/orang
                        </option>
                        <option
                          selected={method === "SBE"}
                          value={"SBE"}
                          className="text-black"
                        >
                          Paket SBE Rp150.000/orang
                        </option>
                      </select>

                      {/* Metode Pembayaran */}
                      <h2 className="mt-4">Metode Pembayaran</h2>
                      <select
                        className="block mt-2 w-full md:w-4/5 p-3 text-white bg-white/20 backdrop-blur-none rounded-2xl transition ease-in-out focus:outline-none"
                        required
                        onChange={(e) => setOpsi(e.target.value)}
                      >
                        <option selected value={null} className="text-black">
                          Pilih Metode Pembayaran
                        </option>
                        <option
                          selected={opsi === "dana"}
                          value={"dana"}
                          className="text-black"
                        >
                          Dana 082240108604 a.n. Putri Adelia, kode: 001
                        </option>
                        <option
                          selected={opsi === "ovo"}
                          value={"ovo"}
                          className="text-black"
                        >
                          OVO 082240108604 a.n. Putri Adelia, kode: 002
                        </option>
                        <option
                          selected={opsi === "bca"}
                          value={"bca"}
                          className="text-black"
                        >
                          BCA 0322386441 a.n. Afiz Ahzariyusa, kode: 003
                        </option>
                        <option
                          selected={opsi === "bni"}
                          value={"bni"}
                          className="text-black"
                        >
                          BNI 1223116685 a.n. Annisa Risty, kode: 004
                        </option>
                        <option
                          selected={opsi === "mandiri"}
                          value={"mandiri"}
                          className="text-black"
                        >
                          Mandiri 1110018697322 a.n. Devina Ar Raudah, kode: 005
                        </option>
                      </select>

                      {(method === "Double" ||
                        method === "Triple" ||
                        method === "Quadruple") && (
                        <>
                          {/* Nama Teman 1 */}
                          <h2 className="mt-4">Nama Teman 1</h2>
                          <input
                            type="text"
                            className="mt-2 w-full md:w-4/5 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
                            value={teman1}
                            onChange={(e) => setTeman1(e.target.value)}
                            required
                          />

                          {/* Email Teman 1 */}
                          <h2 className="mt-4">Email Teman 1</h2>
                          <input
                            type="text"
                            className="mt-2 w-full md:w-4/5 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
                            value={email1}
                            onChange={(e) => setEmail1(e.target.value)}
                            required
                          />
                        </>
                      )}
                      {(method === "Triple" || method === "Quadruple") && (
                        <>
                          {/* Nama Teman 2 */}
                          <h2 className="mt-4">Nama Teman 2</h2>
                          <input
                            type="text"
                            className="mt-2 w-full md:w-4/5 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
                            value={teman2}
                            onChange={(e) => setTeman2(e.target.value)}
                            required
                          />

                          {/* Email Teman 2 */}
                          <h2 className="mt-4">Email Teman 2</h2>
                          <input
                            type="text"
                            className="mt-2 w-full md:w-4/5 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
                            value={email2}
                            onChange={(e) => setEmail2(e.target.value)}
                            required
                          />
                        </>
                      )}
                      {method === "Quadruple" && (
                        <>
                          {/* Nama Teman 3 */}
                          <h2 className="mt-4">Nama Teman 3</h2>
                          <input
                            type="text"
                            className="mt-2 w-full md:w-4/5 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
                            value={teman3}
                            onChange={(e) => setTeman3(e.target.value)}
                            required
                          />

                          {/* Email Teman 3 */}
                          <h2 className="mt-4">Email Teman 3</h2>
                          <input
                            type="text"
                            className="mt-2 w-full md:w-4/5 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
                            value={email3}
                            onChange={(e) => setEmail3(e.target.value)}
                            required
                          />
                        </>
                      )}

                      <div className="mt-4">Bukti Pembayaran</div>
                      <input
                        type="text"
                        placeholder="https://drive.google.com/drive/file/..."
                        className="mt-2 w-full md:w-4/5 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
                        value={bukti}
                        onChange={(e) => setBukti(e.target.value)}
                        required
                      />

                      <div className="mt-16 flex flex-row-reverse justify-end gap-2">
                        <input
                          type="submit"
                          value="NEXT"
                          className="px-8 md:px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:from-[#3ec4ae] 
                      hover:to-[#1c6458] duration-300 border"
                        />
                        <div
                          className="px-8 md:px-12 py-2 rounded-xl text-md font-bold border transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-600 duration-300 cursor-pointer"
                          onClick={() =>
                            router.push("/registration/personal-data")
                          }
                        >
                          BACK
                        </div>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <AiOutlineLoading className="animate-spin" />
                  </div>
                )}
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
