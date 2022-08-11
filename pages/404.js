import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Card from "../components/Card";
import { FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="py-10 px-16 lg:px-20">
      <Head>
        <title>TEC Internship</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <div className="max-w-7xl md:w-xl lg:w-5xl ">
          <div className="flex  h-screen justify-center items-center">
            <div className="sm:w-1/3 w-2/3 mr-8">
              <img src="/logo.png" alt="logo" />
            </div>
            <div className="font-Willywonka text-6xl">
              <h1>Coming Soon..</h1>
              <div className="font-Willywonka text-4xl space-y-2">
                <h1>Stay tuned on our Social Media</h1>
              </div>

              <div className="flex space-x-2 items-center space-y-2">
                <a href="https://instagram.com/tec.ohu" target="blank">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com/ohutec2022" target="blank">
                  <FaTwitter />
                </a>
                <a href="https://www.tiktok.com/@tec.ohu" target="blank">
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
