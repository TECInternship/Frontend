import React, { useState, useEffect } from "react";
import Card from "../Card";
import Link from "next/link";
import axios from "axios";

export default function Register1({ setActive, name, setName }) {
  const [fakultas, setFakultas] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [tahunMasuk, setTahunMasuk] = useState("");
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState("");
  const [idline, setIdLine] = useState("");

  useEffect(() => {
    setUserId(localStorage.getItem("user"));
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      axios
        .get(
          `http://localhost:4000/api/get-user/?_id=${localStorage.getItem(
            "user"
          )}`
        )
        .then((res) => {
          setUser(res.data);
          setName(res.data.name);
          setFakultas(res.data.fakultas);
          setJurusan(res.data.jurusan);
          setTahunMasuk(res.data.tahunMasuk);
          setIdLine(res.data.idline);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/edit-user", {
        _id: userId,
        name,
        fakultas,
        jurusan,
        tahunMasuk,
        idline,
      })
      .then((res) => {
        setActive("2");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="px-12 py-10" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold">Lengkapi Data Dirimu</h1>
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
      <h2 className="text-xs font-extralight">Contoh: IF, TI, TPB</h2>
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
      <div className="mt-16 flex flex-row-reverse justify-end gap-2">
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
  );
}
