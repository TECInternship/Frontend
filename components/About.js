import React from "react";
import SwiperCard from "../components/SwiperCard";
import Alumni from "../components/Alumni";
import Card from "./Card";
import PreEvent from "./PreEvent";

const About = () => {
  return (
    <>
      <section className="flex flex-col items-center mb-32 px-8 sm:px-0">
        <h1 className="text-4xl lg:text-5xl mb-5 font-Willywonka">
          Who{"\u00a0\u00a0"}We{"\u00a0\u00a0"}Are
        </h1>
        <p className="md:w-3/4 space-y-4 lg:text-2xl px-3 py-5 justify-center relative z-10 bg-opacity-20 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl">
          <b>TEC</b>, abreviasi dari <b>Techno Entrepreneur Club</b>, merupakan{" "}
          <b>satu-satunya unit bisnis </b>yang menghimpun mahasiswa ITB yang
          memiliki minat <b>kewirausahaan</b>. TEC ITB menjadi wadah pembinaan
          karakter dan jiwa entrepreneurship bagi anggotanya serta memberikan
          pengaruh di bidang entrepreneurship untuk massa kampus dan masyarakat
          sekitar. Unit ini didirikan pada tanggal <b>19 Desember 2007.</b>
        </p>
      </section>

      <section className="flex flex-col items-center mb-32">
        <h1 className="text-4xl lg:text-5xl mb-5 font-Willywonka">
          What{"\u00a0\u00a0"}We{"\u00a0\u00a0"}Do
        </h1>
        <SwiperCard />
      </section>

      <section className="flex flex-col items-center justify-center mb-32">
        <h1 className="text-4xl lg:text-5xl mb-5 font-Willywonka">
          What{"\u00a0\u00a0"}You{"\u00a0\u00a0"}Will{"\u00a0\u00a0"}Get
        </h1>
        <div className="flex flex-col gap-4 sm:flex-row w-2/5 md:gap-20 sm:w-2/3 lg:w-1/2 justify-items-center text-base italic text-center lg:text-xl">
          <div className="">
            <Card Content={<img className=" mb-4" src="/knowledge.png" />} />
            <h2 className="">Business Knowledge</h2>
          </div>
          <div className="">
            <Card Content={<img className=" mb-4" src="/handson.png" />} />
            <h2 className="">Hands On Business</h2>
          </div>
          <div className="">
            <Card Content={<img className=" mb-4" src="/networking.png" />} />
            <h2 className="">Networking</h2>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mb-32">
        <h1 className="text-4xl lg:text-5xl mb-5 font-Willywonka">
          TEC{"\u00a0\u00a0"}Alumni
        </h1>
        <Alumni />
      </section>
    </>
  );
};

export default About;
