import React, { useState } from "react";
import Card from "./Card";
import Image from "next/image";

const dataAlumni = [
  {
    nama: "Achmad Zaky",
    status: "Founder of Bukalapak",
    description:
      "Ahmad Zaky merupakan Founder dari Unit TEC ITB. Dia merupakan mantan CEO dan Founder dari Bukalapak. Bukalapak sendiri merupakan situs belanja online terpercaya di Indonesia yang menjual berbagai produk kebutuhan masyarakat Indonesia.",
    image: "/AchmadZaky.jpg",
  },
  {
    nama: "Hafizh Ihsaanuddin",
    status: "Founder of Ayam Geprek Crisbar",
    description:
      "Hafizh Ihsannudin merupakan mahasiswa Manajemen’16 ITB dan merupakan alumni TEC ITB. Dia merupakan Founder dari Ayam Crispy Bakar atau sering disebut Crisbar yang terkenal di Bandung.",
    image: "/HafizhCrisbar.png",
  },
  {
    nama: "Andriansyah Putra",
    status: "Founder of Dr. Ganesha Education",
    description:
      "Andriansyah Putra merupakan founder dari salah satu platform try out terbaik yakni, Dr. Ganesha Education. Dr. Ganesha Education merupakan platform daring yang menyediakan kebutuhan siswa dalam mempersiapkan diri menempuh tes masuk PTN.",
    image: "/Andriansyah.png",
  },
  {
    nama: "Umar Hilmi Fadhilah",
    status: "Founder and CEO of BACOAT",
    description:
      "Tidak hanya sebagai pemenang Carbon Footprint Challenge 2019, Umar Hilmi merupakan Founder juga CEO dari BACOAT, produk kemasan yang terbuat dari material organik dan bertujuan memperpanjang jangka kesegaran produk.",
    image: "/Umar.png",
  },

  {
    nama: "Hermawansyah Hidayat",
    status: "Founder of @hidupmedia",
    description:
      "Hermawansyah merupakan Alumnus TEC. Dia merupakan founder dari Hidup atau sebuah  platform untuk menghubungkan masyarakat dengan psikolog/psikiater. ",
    image: "/Hermawansyah.png",
  },
];

const Alumni = () => {
  const [active, setActive] = useState("Achmad Zaky");
  return (
    <div className="md:w-3/4 flex flex-col md:h-[450px] mt-10 px-8 sm:px-0">
      {/* Profile */}
      <div className="flex justify-center">
        {dataAlumni.map((alumnus, id) => (
          <div
            key={id}
            className={
              active === alumnus.nama
                ? " flex flex-col md:flex-row lg:text-2xl z-10 gap-4"
                : "hidden"
            }
          >
            <div className="animate-fade flex flex-col items-center justify-center">
              <img
                src={alumnus.image}
                className="max-w-[150px] rounded-full"
                alt=""
              />
            </div>
            <div className="animate-fade bg-gradient bg-gradient-to-br from-gray-300 to-transparent bg-opacity-20 rounded-lg shadow-2xl px-5 py-5">
              <h1 className="md:text-3xl font-bold text-xl">{alumnus.nama}</h1>
              <p className="text-[12px] md:text-base">{alumnus.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex md:flex-row items-center justify-center lg:space-x-4 lg:mt-8 space-x-2 mt-4">
        {dataAlumni.map((alumnus, id) => (
          <button
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            key={id}
            onClick={() => setActive(alumnus.nama)}
          >
            <img
              src={alumnus.image}
              className="max-w-[50px] md:max-w-[75px] rounded-full hover:border"
              alt=""
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
