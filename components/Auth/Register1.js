import React from "react";
import Card from "../Card";
import Link from "next/link";

export default function Register1(props) {
  return (
    <form className="px-12 py-10" onSubmit={() => props.setActive("2")}>
      <h1 className="text-2xl font-semibold">Lengkapi Data Dirimu</h1>
      <h2 className="mt-2">
        Lengkapi data diri untuk melakukan finalisasi akunmu.
      </h2>

      {/* Nama */}
      <h1 className="mt-10">Nama Lengkap</h1>
      <input
        type="text"
        className="mt-2 w-3/4 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
        required
      />

      {/* Fakultas */}
      <h1 className="mt-4">Fakultas</h1>
      <h2 className="text-xs font-extralight">Contoh: STEI, SBM</h2>
      <input
        type="text"
        className="mt-2 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
        value={props.fakultas}
        onChange={(e) => props.setFakultas(e.target.value)}
        required
      />

      {/* Program Studi */}
      <h1 className="mt-4">Program Studi</h1>
      <h2 className="text-xs font-extralight">Contoh: IF, TI, TPB</h2>
      <input
        type="text"
        className="mt-2 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
        value={props.jurusan}
        onChange={(e) => props.setJurusan(e.target.value)}
        required
      />

      {/* Tahun Masuk */}
      <h1 className="mt-4">Tahun Masuk</h1>
      <h2 className="text-xs font-extralight">Contoh: 2022</h2>
      <input
        type="text"
        className="mt-2 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
        value={props.tahunMasuk}
        onChange={(e) => props.setTahunMasuk(e.target.value)}
        required
      />
      <div className="mt-16 flex justify-end gap-2">
        <Link href="/auth">
          <button className="px-12 py-2 rounded-xl text-md font-bold border">
            BACK
          </button>
        </Link>
        <input
          type={"submit"}
          value="NEXT"
          className="px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] cursor-pointer"
        />
      </div>
    </form>
  );
}
