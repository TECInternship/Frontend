import React from "react";

export default function Register2({ setActive }) {
  return (
    <div className="py-10">
      <div className="mx-12">
        <div className="text-2xl font-semibold">Lakukan Pembayaran</div>
        <div className="mt-2">
          Untuk menjadi intern resmi, kamu diharuskan membayar biaya registrasi.
        </div>

        <div className="mt-10">Tipe Pembayaran</div>
        <div className="mb-3 xl:w-96">
          <select
            className="form-select appearance-none block mt-2 w-[535px] h-[52px] px-3 py-1.5 text-white bg-white/20 backdrop-blur-none rounded-2xl transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option selected value="1">
              Single Rp50.000/orang
            </option>
            <option value="2">Double Rp40.000/orang </option>
            <option value="3">Triple Rp35.000/orang</option>
          </select>
        </div>

        <div className="mt-10">Nama Teman 1</div>
        <input
          type="text"
          className="mt-2 w-[535px] h-[52px] rounded-2xl bg-white/20 backdrop-blur-none px-3"
        />

        <div className="mt-10">Nama Teman 2</div>
        <input
          type="text"
          className="mt-2 w-[535px] h-[52px] px-3 rounded-2xl bg-white/20 backdrop-blur-none"
        />

        <div className="mt-10">Bukti Pembayaran</div>
        <div className="text-xs font-extralight">
          kirim ke XXXXXXXX a.n. Willy Wonka
        </div>
        <input
          className="mt-2 block w-64 text-base text-white bg-white/20 backdrop-blur-none rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
          id="file_input"
          type="file"
        />

        <div className="container px-16 mt-8 flex justify-end">
          <button
            className="px-12 py-2 rounded-xl text-md font-bold border"
            onClick={() => setActive("1")}
          >
            BACK
          </button>
          <button
            className="px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685]"
            onClick={() => setActive("3")}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
