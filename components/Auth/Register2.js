import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Register2(props) {
  const [teman1, setTeman1] = useState("");
  const [email1, setEmail1] = useState("");
  const [teman2, setTeman2] = useState("");
  const [email2, setEmail2] = useState("");

  useEffect(() => {
    props.setTeman([
      { name: teman1, email: email1 },
      { name: teman2, email: email2 },
    ]);
    console.log(props.teman);
  }, [teman1, teman2, email1, email2]);

  const handleChange = (e) => {
    props.setMethod(e.target.value);
    setTeman1("");
    setTeman2("");
  };

  return (
    <form className="px-12 py-10" onSubmit={() => props.setActive("3")}>
      <div className="text-2xl font-semibold">Lakukan Pembayaran</div>
      <div className="mt-2">
        Untuk menjadi intern resmi, kamu diharuskan membayar biaya registrasi.
      </div>
      <div className="mt-10">Tipe Pembayaran</div>
      <div className="mb-3 xl:w-96">
        <select
          className="form-select appearance-none block mt-2 w-[535px] h-[52px] px-3 py-1.5 text-white bg-white/20 backdrop-blur-none rounded-2xl transition ease-in-out m-0focus:text-gray-700 focus:border-blue-600 focus:outline-none"
          required
          onChange={handleChange}
        >
          <option value={1} className="text-black">
            Single Rp50.000/orang
          </option>
          <option value={2} className="text-black">
            Double Rp40.000/orang{" "}
          </option>
          <option value={3} className="text-black">
            Triple Rp35.000/orang
          </option>
        </select>
      </div>
      {props.method > 1 && (
        <>
          {/* Nama Teman 1 */}
          <h1 className="mt-4">Nama Teman 1</h1>
          <input
            type="text"
            className="mt-2 w-3/4 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
            value={teman1}
            onChange={(e) => setTeman1(e.target.value)}
            required
          />

          {/* Email Teman 1 */}
          <h1 className="mt-4">Email Teman 1</h1>
          <input
            type="text"
            className="mt-2 w-3/4 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
            value={email1}
            onChange={(e) => setEmail1(e.target.value)}
            required
          />
        </>
      )}
      {props.method > 2 && (
        <>
          {/* Nama Teman 2 */}
          <h1 className="mt-4">Nama Teman 2</h1>
          <input
            type="text"
            className="mt-2 w-3/4 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
            value={teman2}
            onChange={(e) => setTeman2(e.target.value)}
            required
          />

          {/* Email Teman 2 */}
          <h1 className="mt-4">Email Teman 2</h1>
          <input
            type="text"
            className="mt-2 w-3/4 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
            value={email2}
            onChange={(e) => setEmail2(e.target.value)}
            required
          />
        </>
      )}

      <div className="mt-16 flex justify-end gap-2">
        <button
          className="px-12 py-2 rounded-xl text-md font-bold border"
          onClick={() => props.setActive("1")}
        >
          BACK
        </button>
        <input
          type={"submit"}
          value="NEXT"
          className="px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] cursor-pointer"
        />
      </div>
    </form>
  );
}
