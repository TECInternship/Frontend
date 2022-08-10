import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Card from "../components/Card";

const NotFound = () => {
  const router = useRouter();

  useEffect(()=>{
      setTimeout(()=>{
          router.push('/');
      },3000)
  },[])
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
              <h1>Ooops..</h1>
              <h2>Page can&apos;t be found</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
