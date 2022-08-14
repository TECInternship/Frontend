import React from "react";
import Card from "../Card";
import Link from "next/link";

export default function Register1({ setActive }) {
  return (
    <>
      <div className="pt-10 ml-12">
        <div className="text-2xl font-semibold">Lengkapi Data Dirimu</div>
        <div className="mt-2">
          Lengkapi data diri untuk melakukan finalisasi akunmu.
        </div>
        <div className="mt-10">Nama Lengkap</div>
        <input
          type="text"
          className="mt-2 w-[535px] h-[52px] rounded-2xl bg-white/20 backdrop-blur-none px-3"
        />

        <div className="mt-10">Fakultas</div>
        <div className="mb-3 xl:w-96">
          <select
            className="form-select appearance-none
                block
                mt-2
                w-[535px]
                h-[52px]
                px-3
                py-1.5

                text-white
                bg-white/20 backdrop-blur-none
                rounded-2xl
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>Pilih Fakultas</option>
            <option value="FITB">FITB</option>
            <option value="FMIPA">FMIPA</option>
            <option value="FSRD">FSRD</option>
            <option value="FTMD">FTMD</option>
            <option value="FTTM">FTTM</option>
            <option value="FTSL">FTSL</option>
            <option value="FTI">FTI</option>
            <option value="SAPPK">SAPPK</option>
            <option value="SBM">SBM</option>
            <option value="SF">SF</option>
            <option value="SITH">SITH</option>
            <option value="STEI">STEI</option>
          </select>
        </div>

        <div className="mt-10">Program Studi</div>
        <div className="text-xs font-extralight">Jika sudah penjurusan</div>
        <input
          type="text"
          className="mt-2 w-[535px] h-[52px] px-3 rounded-2xl bg-white/20 backdrop-blur-none"
        />
      </div>

      <div className="container px-16 mt-24 flex justify-end">
        <Link href="/auth">
          <button className="px-12 py-2 rounded-xl text-md font-bold border">
            BACK
          </button>
        </Link>
        <button
          className="px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685]"
          onClick={() => setActive("2")}
        >
          NEXT
        </button>
      </div>
    </>
  );
}
