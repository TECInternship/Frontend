import { useState, useEffect } from "react";
import Head from "next/head";
import Cookies from "js-cookie";
import Image from "next/image";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PreEvent from "../components/PreEvent";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home({ token }) {
  const router = useRouter();

  return (
    <div className="py-10 px-16 lg:px-20">
      <Head>
        <title>TEC Internship 2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets_intern/logo.png" />
      </Head>

      <main className="flex flex-col items-center">
        <div className=" absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:w-[450px] xl:h-[450px] top-0 left-1 opacity-50 flex -z-50">
          <Image
            className=""
            src="/assets_intern/spiderweb.png"
            alt="web"
            width={700}
            height={700}
          />
        </div>
        <div className=" absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:w-[600px] xl:h-[600px] mt-[150px] right-0 opacity-50 flex -z-50">
          <Image
            className=""
            src="/assets_intern/garis.png"
            alt="garis"
            width={700}
            height={700}
          />
        </div>
        <div className=" absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:w-[600px] xl:h-[600px] mt-[350px] left-0 opacity-50 flex -z-50 rotate-180">
          <Image
            className=""
            src="/assets_intern/garis.png"
            alt="garis"
            width={700}
            height={700}
          />
        </div>
        <Navbar token={token} />
        <div className="max-w-7xl md:w-xl lg:w-5xl">
          <span className="motion-safe: animate-fade flex-col translate-x-10">
            <Hero token={token} />
          </span>
          <About />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
