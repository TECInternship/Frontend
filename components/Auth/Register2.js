import React, { useState, useEffect } from "react";
import axios from "axios";

const Register2 = ({ setActive, name}, props) => {
  const [method, setMethod] = useState("");
  const [opsi, setOpsi] = useState("");
  const [teman1, setTeman1] = useState("");
  const [email1, setEmail1] = useState("");
  const [teman2, setTeman2] = useState("");
  const [email2, setEmail2] = useState("");

  const handleChange = (e) => {
    setMethod(e.target.value);
    setTeman1("");
    setEmail1("");
    setTeman2("");
    setEmail2("");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/get-payment/?pembayar=${name}`)
      .then((res) => {
        setMethod(res.data.method);
        setOpsi(res.data.opsi);
        setTeman1(res.data.teman[0].name);
        setEmail1(res.data.teman[0].email);
        setTeman2(res.data.teman[1].name);
        setEmail2(res.data.teman[1].email);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/payment", {
        pembayar: name,
        method,
        opsi,
        teman: [
          { name: teman1, email: email1 },
          { name: teman2, email: email2 },
        ],
      })
      .then((res) => {
        setActive("3");
        setMethod(res.data.method);
        // window.location.reload();
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="animate-fade">
    <form className="px-12 py-10" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold">Lakukan Pembayaran</h1>
      <h2 className="mt-2">
        Untuk menjadi intern resmi, kamu diharuskan membayar biaya registrasi.
      </h2>

      {/* Tipe Pembayaran */}
      <h2 className="mt-10">Tipe Pembayaran</h2>
      <select
        className="block mt-2 w-full md:w-4/5 p-3 text-white bg-white/20 backdrop-blur-none rounded-2xl transition ease-in-out focus:outline-none"
        required
        onChange={handleChange}
      >
        <option selected={method === 1} value={1} className="text-black">
          Single Rp50.000/orang
        </option>
        <option selected={method === 2} value={2} className="text-black">
          Double Rp40.000/orang
        </option>
        <option selected={method === 3} value={3} className="text-black">
          Triple Rp35.000/orang
        </option>
        <option selected={method === 0} value={0} className="text-black">
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
        <option
          selected={method === "dana"}
          value={"dana"}
          className="text-black"
        >
          Dana
        </option>
        <option
          selected={method === "shopeepay"}
          value={"shopeepay"}
          className="text-black"
        >
          Shopeepay{" "}
        </option>
        <option
          selected={method === "gopay"}
          value={"gopay"}
          className="text-black"
        >
          GoPay
        </option>
        <option
          selected={method === "bca"}
          value={"bca"}
          className="text-black"
        >
          BCA
        </option>
      </select>

      {method > 1 && (
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
      {method > 2 && (
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

      <div className="mt-4">Bukti Pembayaran</div>
      <div className="text-xs font-extralight">
        kirim ke XXXXXXXX a.n. Willy Wonka
      </div>
      <input
        className="mt-2 w-full md:w-4/5 max-w-sm px-3 py-1.5 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
        type="file"
        // required
        value={props.bukti}
        onChange={(e) => props.setBukti(e.target.value)}
      />

      <div className="mt-16 flex flex-row-reverse justify-end gap-2">
        <input
          type={"submit"}
          value="NEXT"
          className="px-8 md:px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] cursor-pointer"
        />
        <button
          className="px-8 md:px-12 py-2 rounded-xl text-md font-bold border"
          onClick={() => setActive("1")}
        >
          BACK
        </button>
      </div>
      </form>
      </div>
  );
}

export default Register2;
