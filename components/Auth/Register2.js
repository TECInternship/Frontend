import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Register2 = ({ setActive, email }) => {
  const [method, setMethod] = useState("");
  const [opsi, setOpsi] = useState("");
  const [teman1, setTeman1] = useState("");
  const [email1, setEmail1] = useState("");
  const [teman2, setTeman2] = useState("");
  const [email2, setEmail2] = useState("");
  const [teman3, setTeman3] = useState("");
  const [email3, setEmail3] = useState("");
  const [bukti, setBukti] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setMethod(e.target.value);
    setTeman1("");
    setEmail1("");
    setTeman2("");
    setEmail2("");
    setTeman3("");
    setEmail3("");
  };

  useEffect(() => {
    const doFetch = async () => {
      if (email) {
        await axios
          .get(
            `https://api-tecinternship.herokuapp.com/api/get-payment/?pembayar=${email}`
          )
          .then((res) => {
            setMethod(res.data?.method);
            setOpsi(res.data?.opsi);
            setTeman1(res.data.teman[0]?.name);
            setEmail1(res.data.teman[0]?.email);
            setTeman2(res.data.teman[1]?.name);
            setEmail2(res.data.teman[1]?.email);
            setTeman3(res.data.teman[2]?.name);
            setEmail3(res.data.teman[2]?.email);
            setBukti(res.data.buktiPembayaran);
          })
          .catch((err) => console.log(err));
      }
    };
    doFetch();
  }, []);

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
                setActive("3");
                // console.log(res);
                // window.location.reload();
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
                setActive("3");
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
    <div className="animate-fade">
      <form className="px-12 py-10" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">Lakukan Pembayaran</h1>
        <h2 className="mt-2 text-justify">
          Untuk menjadi intern resmi, kamu diharuskan membayar biaya registrasi.
          <br></br>Setiap nominal yang akan dibayarkan harus menambahkan kode
          unik yang disesuaikan dengan platform pembayaran yang digunakan Contoh
          : Memilih paket 1 dan melakukan transfer melalui DANA maka nominal
          transfer yaitu Rp50.001,00
        </h2>
        {/* Tipe Pembayaran */}
        <h2 className="mt-10">Tipe Pembayaran</h2>
        <select
          className="block mt-2 w-full md:w-4/5 p-3 text-white bg-white/20 backdrop-blur-none rounded-2xl transition ease-in-out focus:outline-none"
          required
          onChange={handleChange}
        >
          <option selected value={null} className="text-black">
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
            Paket SBE Rp130.000/orang
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
            selected={opsi === "bni"}
            value={"bni"}
            className="text-black"
          >
            BNI 1223116685 a.n. Annisa Risty, kode: 004
          </option>
          <option
            selected={opsi === "bca"}
            value={"bca"}
            className="text-black"
          >
            BCA 0322386441 a.n. Afiz Ahzariyusa, kode: 003
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
            className="px-8 md:px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] cursor-pointer"
          />
          <button
            className="px-8 md:px-12 py-2 rounded-xl text-md font-bold border"
            onClick={() => router.push("/personal-data")}
          >
            BACK
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register2;
